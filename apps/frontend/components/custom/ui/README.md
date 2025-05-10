# Custom UI Components with gluestack-ui v2 and NativeWind

This directory contains custom UI components that build on top of the base gluestack-ui v2 components with NativeWind styling.

## Purpose

Custom UI components:

- Extend the base gluestack-ui v2 components with application-specific styling and functionality
- Provide reusable implementations of common component patterns used across the application
- Maintain consistent styling and behavior throughout the application
- Use NativeWind's `className` prop for styling instead of component-specific style props

## Guidelines

When creating or modifying custom UI components:

1. **Leverage Base Components**: Always build on top of components from `/components/ui` rather than implementing from scratch.

2. **Use NativeWind for Styling**: Use the `className` prop with NativeWind utility classes for styling components.

   ```tsx
   // Good
   <Box className="p-4 bg-background-50 rounded-lg">

   // Instead of
   <Box padding="md" bg="$backgroundLight100" borderRadius="lg">
   ```

3. **Follow Container/View Pattern**: Maintain the established Container/View pattern:

   - `ComponentNameContainer.tsx`: Handles logic and state
   - `ComponentNameView.tsx`: Handles presentation
   - `index.tsx`: Exports the container component
   - `types.ts`: Defines TypeScript interfaces

4. **Properly Type className**: Include className in your component props.

   ```tsx
   export interface CustomButtonProps extends ButtonProps {
     label: string;
     className?: string;
   }
   ```

5. **Support Dark Mode**: Use NativeWind's dark mode utilities for all components.

   ```tsx
   <Box className="bg-white dark:bg-background-800">
     <Text className="text-typography-900 dark:text-typography-50">
       {content}
     </Text>
   </Box>
   ```

6. **Handle Interactive States**: Use NativeWind's state variants for interactive components.

   ```tsx
   <Pressable className="bg-primary-50 data-[hover=true]:bg-primary-100 data-[active=true]:bg-primary-200">
   ```

7. **Support All Platforms**: Ensure components work properly across web and native platforms.

8. **Document Component Usage**: Include clear documentation on how to use the component, including:
   - Available props
   - Examples of common usage patterns
   - Platform-specific considerations

## File Structure Example

```
/CustomButton/
  ├── CustomButtonContainer.tsx  // Logic and state management
  ├── CustomButtonView.tsx       // Presentation layer
  ├── index.tsx                  // Export point
  └── type.ts                    // TypeScript definitions
```

## Example Component

```tsx
// CustomButtonContainer.tsx
import React, { useState } from "react";
import CustomButtonView from "./CustomButtonView";
import { CustomButtonProps } from "./types";

const CustomButtonContainer = ({ onPress, ...props }: CustomButtonProps) => {
  // Logic here
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    if (!onPress) return;

    setIsLoading(true);
    try {
      await onPress();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CustomButtonView {...props} onPress={handlePress} isLoading={isLoading} />
  );
};

export default CustomButtonContainer;

// CustomButtonView.tsx
import React from "react";
import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button";
import { CustomButtonProps } from "./types";

const CustomButtonView = ({
  label,
  variant = "solid",
  size = "md",
  isLoading = false,
  className,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={`rounded-lg ${variant === "primary" ? "bg-primary-500" : ""} ${className || ""}`}
      isDisabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner className="text-white" />
      ) : (
        <ButtonText className="font-medium">{label}</ButtonText>
      )}
    </Button>
  );
};

export default CustomButtonView;

// types.ts
import { ButtonProps } from "@/components/ui/button";

export interface CustomButtonProps extends Omit<ButtonProps, "children"> {
  /**
   * The text to display in the button
   */
  label: string;

  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean;

  /**
   * Additional className for styling with NativeWind
   */
  className?: string;

  /**
   * Callback function when button is pressed
   */
  onPress?: () => void | Promise<void>;
}

// index.tsx
export { default } from "./CustomButtonContainer";
export type { CustomButtonProps } from "./types";
```
