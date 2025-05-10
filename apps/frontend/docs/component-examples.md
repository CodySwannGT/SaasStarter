# Component Usage Examples

This document provides examples of using the UI components in our redesigned component architecture.

## UI Components

### Basic Layout

```tsx
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function MyScreen() {
  return (
    <Box className="p-4 bg-background-50 flex-1">
      <Heading className="text-2xl">Welcome</Heading>

      <VStack className="space-y-4 mt-6">
        <Text>This is a simple layout example using UI components.</Text>

        <HStack className="space-x-2 items-center">
          <Box className="w-10 h-10 bg-primary-500 rounded-md" />
          <VStack>
            <Text className="font-bold">Item Title</Text>
            <Text className="text-typography-600">
              Item description goes here
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
```

### Form Elements

```tsx
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";

export default function MyForm() {
  return (
    <Box className="p-6">
      <VStack className="space-y-6">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Username</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder="Enter your username" />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Choose a unique username
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="password" placeholder="Enter your password" />
          </Input>
        </FormControl>

        <Button>
          <ButtonText>Submit</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
```

## Custom UI Components

### Card Component Example

```tsx
// Import the Card custom component
import { Card, CardHeader, CardBody, CardFooter } from "@/components/custom/ui";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";

export default function MyCardScreen() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <Text fontWeight="bold" size="lg">
          Card Title
        </Text>
      </CardHeader>

      <CardBody>
        <Text>
          This is the content of the card. It uses a custom Card component that
          provides consistent styling across the app.
        </Text>
      </CardBody>

      <CardFooter>
        <Button size="sm" variant="outline">
          <ButtonText>View Details</ButtonText>
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### SearchInput Component Example

```tsx
// Import the SearchInput custom component
import { SearchInput } from "@/components/custom/ui";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { useState } from "react";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box padding="md">
      <SearchInput
        placeholder="Search players..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmit={() => console.log("Searching for:", searchQuery)}
        showClearButton
      />

      <VStack space="md" marginTop="lg">
        <Text>Search results will appear here...</Text>
      </VStack>
    </Box>
  );
}
```

## Feature-Specific Components

### Player Card Component Example

```tsx
// Import from feature components
import { PlayerCard } from "@/features/players/components";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";

export default function PlayersScreen() {
  const players = [
    {
      id: "1",
      name: "John Doe",
      position: "Forward",
      team: "Team A",
      rating: 85,
    },
    {
      id: "2",
      name: "Jane Smith",
      position: "Midfielder",
      team: "Team B",
      rating: 92,
    },
  ];

  return (
    <Box padding="md">
      <VStack space="md">
        {players.map(player => (
          <PlayerCard
            key={player.id}
            player={player}
            onPress={() => console.log("Selected player:", player.name)}
          />
        ))}
      </VStack>
    </Box>
  );
}
```

## Responsive Design Examples

```tsx
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { useBreakpointValue } from "@gluestack-ui/provider";

export default function ResponsiveLayout() {
  // Responsive values based on screen size
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const padding = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Box
      className={`p-${padding} flex gap-4`}
      style={{ flexDirection: direction }}
    >
      <Box className="flex-1 bg-primary-100 p-4 rounded-md">
        <Text>First Section</Text>
      </Box>

      <Box className="flex-1 bg-secondary-100 p-4 rounded-md">
        <Text>Second Section</Text>
      </Box>
    </Box>
  );
}
```

## Dark Mode Compatibility

All components automatically support dark mode through the gluestack-ui theming system:

```tsx
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Switch } from "@/components/ui/switch";
import { HStack } from "@/components/ui/hstack";
import { useColorMode } from "@gluestack-ui/provider";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="p-4">
      <HStack className="space-x-4 items-center">
        <Text>Dark Mode</Text>
        <Switch value={colorMode === "dark"} onValueChange={toggleColorMode} />
      </HStack>

      <Box className="mt-6 p-4 bg-background-50 dark:bg-background-800 rounded-md">
        <Text className="text-typography-900 dark:text-typography-50">
          This box automatically adapts to light/dark mode
        </Text>
      </Box>
    </Box>
  );
}
```

## Migration Example (Before & After)

Here's an example of migrating from direct className usage to component props:

### Before Migration

```tsx
// Component with direct Tailwind classes
function ProfileCard({ user }) {
  return (
    <View className="p-4 bg-white rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <View className="flex flex-row items-center space-x-4">
        <Image
          source={{ uri: user.avatar }}
          className="w-16 h-16 rounded-full"
        />
        <View>
          <Text className="text-lg font-bold text-gray-900 dark:text-white">
            {user.name}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {user.title}
          </Text>
        </View>
      </View>

      <View className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Text className="text-gray-700 dark:text-gray-300 mb-2">
          {user.bio}
        </Text>

        <View className="flex flex-row mt-2">
          <Pressable className="bg-blue-500 py-2 px-4 rounded-md mr-2">
            <Text className="text-white font-medium">Message</Text>
          </Pressable>
          <Pressable className="bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-md">
            <Text className="text-gray-800 dark:text-white font-medium">
              Follow
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
```

### After Migration

```tsx
// Step 1: Create a custom ProfileCard component
// /components/custom/ui/ProfileCard/ProfileCardView.tsx
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Pressable } from "@/components/ui/pressable";
import type { ProfileCardProps } from "./types";

const ProfileCardView = ({
  user,
  onMessage,
  onFollow,
  ...props
}: ProfileCardProps) => {
  return (
    <Box
      className="p-4 bg-white rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      {...props}
    >
      <HStack className="space-x-4 items-center">
        <Image
          source={{ uri: user.avatar }}
          alt={user.name}
          className="w-16 h-16 rounded-full"
        />
        <VStack>
          <Text className="text-lg font-bold text-gray-900 dark:text-white">
            {user.name}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {user.title}
          </Text>
        </VStack>
      </HStack>

      <Box className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Text className="text-gray-700 dark:text-gray-300 mb-2">
          {user.bio}
        </Text>

        <HStack className="mt-2">
          <Pressable
            className="bg-blue-500 py-2 px-4 rounded-md mr-2"
            onPress={onMessage}
          >
            <Text className="text-white font-medium">Message</Text>
          </Pressable>
          <Pressable
            className="bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-md"
            onPress={onFollow}
          >
            <Text className="text-gray-800 dark:text-white font-medium">
              Follow
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
};

// Step 2: Usage in application
import { ProfileCard } from "@/components/custom/ui";

function ProfileScreen() {
  const user = {
    name: "Jane Smith",
    title: "Senior Developer",
    bio: "Full-stack developer with 10 years of experience...",
    avatar: "https://example.com/avatar.jpg",
  };

  return (
    <ProfileCard
      user={user}
      onMessage={() => console.log("Message sent")}
      onFollow={() => console.log("Followed")}
    />
  );
}
```

## Best Practices

1. **Always use component props instead of direct className**:

   ```tsx
   // Good
   <Box padding="md" marginTop="lg" bg="$primary500">

   // Avoid
   <Box className="p-4 mt-5 bg-blue-500">
   ```

2. **Use the component hierarchy appropriately**:

   - Use core UI components for simple elements
   - Use custom UI components for reusable patterns
   - Create feature components for feature-specific UI

3. **Follow the Container/View pattern**:

   - Keep logic in Container components
   - Keep presentation in View components

4. **Use TypeScript properly**:
   - Define prop interfaces for all components
   - Use proper typing for all props and state
