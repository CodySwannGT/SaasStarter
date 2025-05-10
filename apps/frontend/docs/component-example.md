# Custom Component Example with gluestack-ui v2 and NativeWind

This document provides a complete example of a custom component following our guidelines using gluestack-ui v2 with NativeWind styling.

## Creating a Custom Card Component

Let's create a custom `InfoCard` component that displays information with a title, content, and optional icon.

### Directory Structure

```
/components
  /custom
    /ui
      /InfoCard
        /index.tsx
        /InfoCardContainer.tsx
        /InfoCardView.tsx
        /types.ts
```

### Types (types.ts)

```tsx
import type { ReactNode } from "react";
import type { TouchableOpacityProps } from "react-native";

export interface InfoCardProps extends TouchableOpacityProps {
  /**
   * The title of the card
   */
  title: string;

  /**
   * The content text or component
   */
  content: string | ReactNode;

  /**
   * Optional icon component
   */
  icon?: ReactNode;

  /**
   * Card variant
   * @default 'default'
   */
  variant?: "default" | "info" | "success" | "warning" | "error";

  /**
   * Whether the card is in loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Whether the card is active or selected
   * @default false
   */
  isActive?: boolean;

  /**
   * Callback when card is pressed
   */
  onPress?: () => void;

  /**
   * Additional classes to apply to the card container
   */
  className?: string;
}
```

### View Component (InfoCardView.tsx)

```tsx
import React from "react";
import { Pressable } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Skeleton } from "@/components/ui/skeleton";
import type { InfoCardProps } from "./types";

const InfoCardView = ({
  title,
  content,
  icon,
  variant = "default",
  isLoading = false,
  isActive = false,
  onPress,
  className,
  ...props
}: InfoCardProps) => {
  // Determine variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "info":
        return "bg-info-50 border-info-200";
      case "success":
        return "bg-success-50 border-success-200";
      case "warning":
        return "bg-warning-50 border-warning-200";
      case "error":
        return "bg-error-50 border-error-200";
      default:
        return "bg-background-50 border-outline-200";
    }
  };

  // Loading state UI
  if (isLoading) {
    return (
      <Card
        className={`p-4 rounded-lg border ${getVariantStyles()} ${className || ""}`}
      >
        <VStack className="space-y-2">
          <Skeleton className="h-6 w-36 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
        </VStack>
      </Card>
    );
  }

  // Render actual content
  return (
    <Pressable onPress={onPress} {...props}>
      <Card
        className={`
          p-4 rounded-lg border 
          ${getVariantStyles()} 
          ${isActive ? "border-primary-500 border-2" : ""}
          ${className || ""}
        `}
      >
        <VStack className="space-y-2">
          <HStack className="items-center space-x-2">
            {icon && <Box className="mr-2">{icon}</Box>}
            <Heading className="text-lg font-medium text-typography-900">
              {title}
            </Heading>
          </HStack>

          {typeof content === "string" ? (
            <Text className="text-typography-700">{content}</Text>
          ) : (
            content
          )}
        </VStack>
      </Card>
    </Pressable>
  );
};

export default InfoCardView;
```

### Container Component (InfoCardContainer.tsx)

```tsx
import React, { useState } from "react";
import InfoCardView from "./InfoCardView";
import type { InfoCardProps } from "./types";

const InfoCardContainer = ({ onPress, ...props }: InfoCardProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    if (onPress) {
      setIsPressed(true);

      // Call the onPress handler and reset pressed state after a short delay
      onPress();

      setTimeout(() => {
        setIsPressed(false);
      }, 200);
    }
  };

  return (
    <InfoCardView
      {...props}
      onPress={onPress ? handlePress : undefined}
      className={`${props.className || ""} ${isPressed ? "opacity-80" : ""}`}
    />
  );
};

export default InfoCardContainer;
```

### Index File (index.tsx)

```tsx
export { default } from "./InfoCardContainer";
export type { InfoCardProps } from "./types";
```

## Usage Examples

Here are examples of how to use the InfoCard component:

### Basic Usage

```tsx
import InfoCard from "@/components/custom/ui/InfoCard";

const MyComponent = () => {
  return (
    <InfoCard
      title="Account Information"
      content="Your account is in good standing."
    />
  );
};
```

### With Icon

```tsx
import InfoCard from "@/components/custom/ui/InfoCard";
import { InfoIcon } from "lucide-react-native";

const MyComponent = () => {
  return (
    <InfoCard
      title="Important Notice"
      content="Please update your profile information."
      icon={<InfoIcon size={20} className="text-info-500" />}
      variant="info"
    />
  );
};
```

### With Custom Content

```tsx
import InfoCard from "@/components/custom/ui/InfoCard";
import { VStack, Text, Button, ButtonText } from "@/components/ui/";

const MyComponent = () => {
  return (
    <InfoCard
      title="Payment Required"
      variant="warning"
      content={
        <VStack className="space-y-2">
          <Text className="text-typography-700">
            Please update your payment information to continue using our
            services.
          </Text>

          <Button size="sm" className="self-start mt-2">
            <ButtonText>Update Payment</ButtonText>
          </Button>
        </VStack>
      }
    />
  );
};
```

### With Loading State

```tsx
import InfoCard from "@/components/custom/ui/InfoCard";

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <InfoCard
      title="Account Statistics"
      content="Loading your account statistics..."
      isLoading={isLoading}
    />
  );
};
```

### With Active State and Press Handler

```tsx
import InfoCard from "@/components/custom/ui/InfoCard";
import { useState } from "react";

const MyComponent = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <>
      <InfoCard
        title="Option 1"
        content="Choose this option for standard service."
        isActive={activeCard === "option1"}
        onPress={() => setActiveCard("option1")}
        className="mb-2"
      />

      <InfoCard
        title="Option 2"
        content="Choose this option for premium service."
        isActive={activeCard === "option2"}
        onPress={() => setActiveCard("option2")}
      />
    </>
  );
};
```
