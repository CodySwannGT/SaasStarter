import React from "react";
import { Pressable } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import type { ComponentTemplateProps } from "./types";

/**
 * View component for ComponentTemplate
 *
 * This component handles:
 * - UI rendering
 * - Styling
 * - Layout
 * - Forwarding events to the container
 */
const ComponentTemplateView = ({
  title,
  description,
  onPress,
  variant = "default",
  className,
  ...props
}: ComponentTemplateProps) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Box
        className={`rounded-md border p-4 
          ${
            variant === "default"
              ? "border-outline-300 bg-background-50"
              : variant === "highlighted"
                ? "border-primary-300 bg-primary-50"
                : "border-outline-200 bg-background-100"
          } ${className || ""}`}
      >
        <Text className="mb-1 text-base font-bold text-typography-900">
          {title}
        </Text>
        {description && (
          <Text className="text-sm text-typography-700">{description}</Text>
        )}
      </Box>
    </Pressable>
  );
};

export default ComponentTemplateView;
