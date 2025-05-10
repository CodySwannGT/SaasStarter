import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";
import Constants, { ExecutionEnvironment } from "expo-constants";
import {
  ErrorBoundaryProps,
  Slot,
  useNavigationContainerRef,
} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "@/components/ui/text";

import "../global.css";

LogBox.ignoreLogs(["[Reanimated]", "Sentry"]);

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <Box className="flex-1 dark:bg-error-500">
      <Text>{props.error.message}</Text>
      <Button variant="link" onPress={props.retry}>
        <ButtonText>Try Again?</ButtonText>
      </Button>
    </Box>
  );
}

export const unstable_settings = {
  initialRouteName: "(root)",
  root: {
    initialRouteName: "index",
  },
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay:
    Constants.executionEnvironment === ExecutionEnvironment.StoreClient, // Only in native builds, not in Expo Go.
});

Sentry.init({
  enabled: Constants.executionEnvironment === ExecutionEnvironment.StoreClient,
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  tracesSampleRate: 1.0,
  enableNativeFramesTracking:
    Constants.executionEnvironment === ExecutionEnvironment.StoreClient,
  _experiments: {
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
  },
  integrations: [
    Sentry.mobileReplayIntegration({
      maskAllText: false,
      maskAllImages: false,
      maskAllVectors: false,
    }),
    navigationIntegration,
  ],
});

function RootWrapper() {
  return <RootLayout />;
}

function RootLayout() {
  const ref = useNavigationContainerRef();
  const appReady = true;

  useEffect(() => {
    if (ref) {
      navigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  useEffect(() => {
    if (appReady) {
      SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider mode="dark">
        <ThemeProvider value={DarkTheme}>
          <SafeAreaProvider>
            <Slot />
          </SafeAreaProvider>
          <StatusBar />
        </ThemeProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}

export default Sentry.wrap(RootWrapper);
