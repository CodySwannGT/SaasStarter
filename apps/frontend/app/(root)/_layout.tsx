import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
  organizations: {
    initialRouteName: "index",
  },
};

export default function Layout() {
  return (
    <SafeAreaView edges={["top"]}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  );
}
