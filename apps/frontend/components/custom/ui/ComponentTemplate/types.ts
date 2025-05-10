import type { PressableProps } from "react-native";

/**
 * Props for the ComponentTemplate component
 */
export interface ComponentTemplateProps extends PressableProps {
  /**
   * The title text to display
   */
  title: string;

  /**
   * Optional description text to display below the title
   */
  description?: string;

  /**
   * Callback function when the component is pressed
   */
  onPress?: () => void;

  /**
   * The style variant of the component
   * @default 'default'
   */
  variant?: "default" | "highlighted" | "muted";

  /**
   * Additional className for NativeWind styling
   */
  className?: string;
}
