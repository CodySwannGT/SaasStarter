# UI Component Guidelines

This document outlines the guidelines for working with UI components in the application, focusing on maximizing reusability and consistency.

## Component Structure

We organize our UI components into two main categories:

1. **UI Components** (`/components/ui`): Base components from gluestack-ui v2 with NativeWind styling.

2. **Custom UI Components** (`/components/custom/ui`): Application-specific components that build on UI components to provide reusable, higher-level functionality.

3. **Feature Components** (`/features`): Components that are specific to particular features of the application.

## Using UI Components

### Prefer Component Props Over Direct Classes

**Avoid** direct usage of Tailwind classes outside of component definitions:

```tsx
// ❌ Avoid this
<Box className="p-4 bg-red-500 rounded-lg">
  <Text className="text-white font-bold">Hello World</Text>
</Box>
```

**Instead**, use component props and custom components:

```tsx
// ✅ Do this
<Card padding="md" variant="error">
  <CardText isBold>Hello World</CardText>
</Card>
```

### Use the Right Component Level

1. Use **UI Components** (`/components/ui`) for basic UI elements:

   ```tsx
   import { Box } from "@/components/ui/box";
   import { Text } from "@/components/ui/text";
   import { Button, ButtonText } from "@/components/ui/button";
   ```

2. Use **Custom UI Components** (`/components/custom/ui`) for reusable patterns:

   ```tsx
   import { Card, FormField, SearchInput } from "@/components/custom/ui";
   ```

3. Create **Feature Components** when the component is specific to a feature:
   ```tsx
   // In /features/player-stats/components/StatCard
   import { Box } from "@/components/ui/box";
   import { Text } from "@/components/ui/text";
   ```

## Important Note About `/components/ui`

While the `/components/ui` directory contains the gluestack-ui v2 components, you should:

- Use `/components/custom/ui` for custom components that build upon the UI components
- Only modify files in `/components/ui` when necessary for major component configuration changes

## Creating New Components

### Using UI Components

When working with UI components:

1. Import the specific component from its respective directory
2. Use the `className` prop for styling with Tailwind
3. Use TypeScript for proper type safety

Example:

```tsx
// In your component
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";

export function MyComponent() {
  return (
    <Box className="p-4 bg-background-50 rounded-lg">
      <Text className="text-lg font-bold mb-2">Title</Text>
      <Button className="bg-primary-500">
        <ButtonText>Click Me</ButtonText>
      </Button>
    </Box>
  );
}
```

### Custom UI Components

When creating a custom UI component:

1. Follow the Container/View pattern
2. Build on top of Core UI Components
3. Add proper TypeScript typing
4. Include comprehensive documentation

Example:

```tsx
// components/custom/ui/SearchBar/SearchBarView.tsx
import { Box } from "@/components/ui/box";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Icon } from "@/components/ui/icon";
import { SearchIcon } from "@/components/icons";
import type { SearchBarProps } from "./types";

const SearchBarView = ({ placeholder, onSearch, ...props }: SearchBarProps) => {
  return (
    <Box {...props}>
      <Input>
        <InputField
          placeholder={placeholder || "Search..."}
          onChangeText={onSearch}
        />
        <InputSlot>
          <Icon as={SearchIcon} />
        </InputSlot>
      </Input>
    </Box>
  );
};

export default SearchBarView;
```

## Styling Guidelines

### Prefer Component Variants

When a component needs different styles based on its context or state, use variants:

```tsx
// Using className for styling variants
<Button className="border border-primary-500 bg-transparent p-2 rounded-md">
  <ButtonText className="text-primary-500 text-sm">Submit</ButtonText>
</Button>
```

### Create New Custom Components for Repeated Patterns

If you find yourself repeatedly applying the same set of styles or behavior to a component, create a custom component:

```tsx
// Instead of repeating this pattern
<Box className="p-4 border border-gray-200 rounded-lg shadow-sm">
  <Heading>Card Title</Heading>
  <Text>Card content</Text>
</Box>;

// Create a custom component
// components/custom/ui/Card/CardView.tsx
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";

const CardView = ({ title, children, ...props }) => (
  <Box className="p-4 border border-gray-200 rounded-lg shadow-sm" {...props}>
    <Heading>{title}</Heading>
    {children}
  </Box>
);
```

## Migration Strategy

When migrating existing components:

1. Identify components that use direct Tailwind className attributes
2. Create proper UI components (core or custom) to replace direct className usage
3. Replace direct className usage with component props
4. Update imports to use the new component structure

## Resources

- [gluestack-ui Documentation](https://gluestack.io/ui/docs/home/overview/quick-start)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Container/View Pattern](https://docs.geminisportsai.com/patterns/container-view)
