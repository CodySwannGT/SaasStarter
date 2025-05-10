# UI Component Architecture

This document outlines our component architecture, focusing on the proper usage of gluestack-ui v2 with NativeWind styling and our Container/View pattern.

## Component Directory Structure

Our component architecture is organized as follows:

```
/components
  /ui                  # gluestack-ui v2 components (DO NOT MODIFY)
  /custom
    /ui               # Custom reusable UI components
      /ComponentName  # Each component in its own directory
  /core               # Base component wrappers (when needed)
/features
  /feature-name
    /components       # Feature-specific components
```

## Component Usage Guidelines

### 1. Use gluestack-ui v2 components with NativeWind

Always prefer using gluestack-ui v2 components with NativeWind styling:

```tsx
// GOOD: Using gluestack-ui components with className prop
import { Button, ButtonText } from "@/components/ui/button";

const MyComponent = () => (
  <Button className="bg-primary-500 rounded-lg" size="md" variant="solid">
    <ButtonText className="text-white font-medium">Click Me</ButtonText>
  </Button>
);
```

### 2. Avoid direct React Native components with custom styling

```tsx
// BAD: Using React Native components with inline styling
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyComponent = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Click Me</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});
```

### 3. Follow the Container/View Pattern

All components should follow the Container/View pattern:

```
ComponentName/
  ├── ComponentNameContainer.tsx  # Logic and data handling
  ├── ComponentNameView.tsx       # Presentation only
  ├── index.tsx                   # Exports container as default
  └── types.ts                    # TypeScript interfaces
```

#### Container Component Example

```tsx
// ButtonContainer.tsx
import React, { useState } from "react";
import ButtonView from "./ButtonView";

const ButtonContainer = ({ onPress, label, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);
    try {
      await onPress();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ButtonView
      onPress={handlePress}
      isLoading={isLoading}
      label={label}
      {...props}
    />
  );
};

export default ButtonContainer;
```

#### View Component Example

```tsx
// ButtonView.tsx
import React from "react";
import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button";
import type { ButtonViewProps } from "./types";

const ButtonView = ({
  onPress,
  label,
  isLoading,
  variant = "solid",
  size = "md",
  className,
  ...props
}: ButtonViewProps) => {
  return (
    <Button
      onPress={onPress}
      variant={variant}
      size={size}
      isDisabled={isLoading}
      className={className}
      {...props}
    >
      {isLoading ? <ButtonSpinner /> : <ButtonText>{label}</ButtonText>}
    </Button>
  );
};

export default ButtonView;
```

#### Types Example

```tsx
// types.ts
import { ButtonProps } from "@/components/ui/button";

export interface ButtonViewProps extends Omit<ButtonProps, "children"> {
  label: string;
  isLoading?: boolean;
  onPress: () => void | Promise<void>;
}
```

#### Index Example

```tsx
// index.tsx
import ButtonContainer from "./ButtonContainer";

export default ButtonContainer;
```

## Component Styling Best Practices

### 1. Use NativeWind `className` prop for styling

```tsx
// Good: Using className prop with Tailwind classes
<Box className="p-4 bg-primary-500 rounded-lg">
  <Text className="text-white font-medium text-lg">Hello World</Text>
</Box>
```

### 2. Use component variants and sizes

Leverage the built-in variants and sizes from gluestack-ui components:

```tsx
// Good: Using component variants and sizes
<Button size="md" variant="solid" action="primary" className="rounded-lg">
  <ButtonText>Click Me</ButtonText>
</Button>
```

### 3. Composition over custom styling

Compose components instead of creating heavily custom-styled ones:

```tsx
// Good: Composing components
<Card className="overflow-hidden border-0">
  <CardHeader className="bg-secondary-500 p-4">
    <Heading className="text-white">Card Title</Heading>
  </CardHeader>
  <CardBody className="p-4">
    <Text className="text-typography-500">Card content goes here</Text>
  </CardBody>
  <CardFooter className="flex-row justify-end p-4 bg-background-50">
    <Button size="sm" variant="outline">
      <ButtonText>Cancel</ButtonText>
    </Button>
    <Button size="sm" className="ml-2">
      <ButtonText>Confirm</ButtonText>
    </Button>
  </CardFooter>
</Card>
```

## Responsive Design

Use NativeWind breakpoints for responsive styling:

```tsx
<Box
  className="
  flex-col sm:flex-row
  p-2 sm:p-4 md:p-6
  gap-2 md:gap-4
"
>
  <Text className="text-sm md:text-base lg:text-lg">Responsive text</Text>
</Box>
```

## Dark Mode

Use NativeWind's dark mode utilities:

```tsx
<Box
  className="
  bg-white dark:bg-background-800
  p-4
"
>
  <Text
    className="
    text-typography-900 dark:text-typography-50
    font-medium
  "
  >
    Text with dark mode support
  </Text>
</Box>
```

## Performance Considerations

1. Use `React.memo` for pure components
2. Utilize `useMemo` and `useCallback` for expensive calculations and callbacks
3. Avoid anonymous inline functions in render methods

## Accessibility

1. Use proper semantic components
2. Provide accessible labels
3. Ensure proper focus management
4. Test with screen readers
