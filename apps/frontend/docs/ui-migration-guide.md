# UI Component Migration Guide for gluestack-ui v2 with NativeWind

This document provides step-by-step guidance for migrating existing UI components to our component architecture using gluestack-ui v2 with NativeWind styling.

## Migration Process Overview

1. **Audit Component Usage**: Identify components that use direct `className` attributes
2. **Create Base Components**: Ensure all needed gluestack-ui components have proper wrappers in `/components/core`
3. **Create Custom Components**: Build reusable custom components for common patterns
4. **Update Imports**: Change imports to use the new component structure
5. **Replace Direct Classes**: Replace `className` usage with component props
6. **Test & Verify**: Ensure all components render correctly after migration

## Important Note About Component Structure

- **Do not modify** `/components/ui` directory as it's managed by gluestack-ui and can be overwritten
- Use `/components/core` for base component wrappers
- Use `/components/custom/ui` for custom components

## Step 1: Identify Components to Migrate

Before starting migration, identify components that:

- Use direct Tailwind `className` attributes
- Reimplent functionality that already exists in gluestack-ui
- Are duplicated across the codebase with slight variations

Example of a component that needs migration:

```tsx
// Before migration
<View className="p-4 bg-gray-100 rounded-lg">
  <Text className="text-lg font-bold mb-2">Title</Text>
  <Text className="text-gray-700">Content</Text>
</View>
```

## Step 2: Use Core Components

Replace direct React Native or gluestack-ui imports with our wrapped components:

```tsx
// Before
import { View, Text } from "react-native";
// or old gluestack-ui v1 (don't use this anymore)
// import { Box, Text } from '@gluestack-ui/themed';

// After
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
```

## Step 3: Extract Patterns to Custom Components

For repeating patterns, create a custom component:

```tsx
// Before (repeated pattern)
<Box className="p-4 border border-gray-200 rounded-lg">
  <Heading className="text-lg font-bold mb-2">{title}</Heading>
  <Text className="text-gray-700">{content}</Text>
</Box>;

// After (create a Card component)
// /components/custom/ui/Card/CardView.tsx
const CardView = ({ title, content, ...props }) => (
  <Box padding="md" borderWidth="hairline" borderRadius="lg" {...props}>
    <Heading size="md" marginBottom="sm">
      {title}
    </Heading>
    <Text color="textSecondary">{content}</Text>
  </Box>
);

// Usage
<Card title="My Title" content="My content" />;
```

## Step 4: Using NativeWind with gluestack-ui v2

With gluestack-ui v2, we use NativeWind's `className` prop for styling:

```tsx
// Before (React Native with inline styles)
<View style={{
  padding: 16,
  marginVertical: 8,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  borderRadius: 8
}}>
  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Title</Text>
</View>

// After (gluestack-ui v2 with NativeWind)
<Box
  className="p-4 my-2 flex-row items-center justify-between bg-white rounded-lg"
>
  <Text className="text-lg font-bold">Title</Text>
</Box>
```

## Step 5: Follow Container/View Pattern

Ensure components follow the Container/View pattern:

```tsx
// MyComponentContainer.tsx
import React from "react";
import MyComponentView from "./MyComponentView";
import type { MyComponentProps } from "./types";

const MyComponentContainer = (props: MyComponentProps) => {
  // Logic here
  const handlePress = () => {
    // Handle logic
  };

  return <MyComponentView {...props} onPress={handlePress} />;
};

export default MyComponentContainer;

// MyComponentView.tsx
import React from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import type { MyComponentViewProps } from "./types";

const MyComponentView = ({
  title,
  onPress,
  ...props
}: MyComponentViewProps) => {
  return (
    <Box {...props}>
      <Text>{title}</Text>
      <Button onPress={onPress}>
        <ButtonText>Press Me</ButtonText>
      </Button>
    </Box>
  );
};

export default MyComponentView;
```

## Common Migration Patterns with NativeWind

### Basic Layout

```tsx
// Before (React Native)
<View style={{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 16
}}>

// After (gluestack-ui v2 with NativeWind)
<Box className="flex-row items-center justify-between p-4">
```

### Typography

```tsx
// Before (React Native)
<Text style={{
  fontSize: 18,
  fontWeight: 'bold',
  color: '#111827'
}}>

// After (gluestack-ui v2 with NativeWind)
<Text className="text-lg font-bold text-typography-900">
```

### Spacing

```tsx
// Before (React Native)
<View style={{
  padding: 16,
  marginVertical: 8,
  marginHorizontal: 12
}}>

// After (gluestack-ui v2 with NativeWind)
<Box className="p-4 my-2 mx-3">
```

### Colors

```tsx
// Before (React Native)
<View style={{
  backgroundColor: '#f3f4f6',
  borderColor: '#e5e7eb'
}}>

// After (gluestack-ui v2 with NativeWind)
<Box className="bg-background-50 border-outline-200">
```

### Dark Mode Support

```tsx
// Before (complicated dark mode handling)
<View style={[
  styles.container,
  isDarkMode ? styles.containerDark : {}
]}>
  <Text style={[
    styles.text,
    isDarkMode ? styles.textDark : {}
  ]}>
    Hello World
  </Text>
</View>

// After (with NativeWind)
<Box className="bg-white dark:bg-background-800 p-4">
  <Text className="text-typography-900 dark:text-typography-50">
    Hello World
  </Text>
</Box>
```

## Migration Strategy for Components with Complex Classes

For components with complex Tailwind classes, follow this workflow:

1. **Identify the component's purpose** (e.g., card, form field, list item)
2. **Create a custom component** in `/components/custom/ui/`
3. **Break down the Tailwind classes** into corresponding gluestack props
4. **Refactor component usage** across the codebase

### Example:

```tsx
// Before - complex component with direct React Native styling
<View style={styles.card}>
  <View style={styles.cardHeader}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.actionButton} onPress={onMorePress}>
      <Icon name="more-horizontal" size={20} color="gray" />
    </TouchableOpacity>
  </View>
  <Text style={styles.description}>{description}</Text>
  <TouchableOpacity style={styles.button} onPress={onButtonPress}>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
</View>;

// After - create a custom CardWithAction component using gluestack-ui v2 with NativeWind
// /components/custom/ui/CardWithAction/CardWithActionView.tsx
const CardWithActionView = ({
  title,
  description,
  buttonText,
  onMorePress,
  onButtonPress,
  className,
  ...props
}: CardWithActionProps) => {
  return (
    <Box
      className={`p-4 shadow-md rounded-lg bg-white border border-outline-200 
        dark:bg-background-800 dark:border-outline-700 ${className || ""}`}
      {...props}
    >
      <HStack className="items-center justify-between mb-3">
        <Text className="text-lg font-bold text-typography-900 dark:text-typography-50">
          {title}
        </Text>
        <Pressable
          className="p-2 rounded-full data-[hover=true]:bg-background-100 
            dark:data-[hover=true]:bg-background-700"
          onPress={onMorePress}
        >
          <Icon
            as={MoreHorizontalIcon}
            className="text-typography-500"
            size="md"
          />
        </Pressable>
      </HStack>
      <Text className="text-typography-700 dark:text-typography-300 mb-4">
        {description}
      </Text>
      <Button className="bg-primary-500 rounded-md" onPress={onButtonPress}>
        <ButtonText className="font-medium">{buttonText}</ButtonText>
      </Button>
    </Box>
  );
};
```

## Testing the Migration

After migrating a component:

1. Render it with the same props as before
2. Verify it looks and functions the same
3. Test it in both light and dark mode
4. Test it on both web and native platforms
5. Test all interactive states (hover, active, disabled, etc.)

## Important NativeWind Features to Use with gluestack-ui v2

### 1. State-based styling

Use data attributes for interactive states:

```tsx
<Pressable className="bg-background-50 data-[hover=true]:bg-background-100 data-[active=true]:bg-background-200">
  <Text>Click Me</Text>
</Pressable>
```

### 2. Dark Mode Support

Use the `dark:` prefix for dark mode styles:

```tsx
<Box className="bg-white dark:bg-background-800">
  <Text className="text-typography-900 dark:text-typography-50">
    Works in light and dark mode
  </Text>
</Box>
```

### 3. Responsive Design

Use responsive prefixes:

```tsx
<HStack className="flex-col sm:flex-row gap-2 md:gap-4">
  <Text className="text-sm md:text-base lg:text-lg">Responsive text</Text>
</HStack>
```

### 4. Composing classes

Combine Tailwind utility classes for complex styling:

```tsx
<Box className="p-4 rounded-lg shadow-md bg-white dark:bg-background-800 border border-outline-200 dark:border-outline-700">
  <Text className="font-medium text-lg mb-2">Title</Text>
</Box>
```

## Resources

- [gluestack-ui Documentation](https://gluestack.io/ui/docs/overview/introduction)
- [gluestack-ui with NativeWind](https://gluestack.io/ui/docs/styling/nativewind)
- [UI Component Guidelines](./ui-component-guidelines.md)
- [NativeWind Documentation](https://www.nativewind.dev/)
