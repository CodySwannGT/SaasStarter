# UI Components

This directory contains the base gluestack-ui components that serve as the foundation for the application's UI.

## Purpose

The UI components in this directory:
- Provide a consistent interface to gluestack-ui's components
- Define the base styling and behavior for all UI elements
- Ensure consistent theming across the application
- Abstract away platform-specific implementations where needed

## Guidelines

When working with base UI components:

1. **Don't Modify Directly**: These components should remain thin wrappers around gluestack-ui components. Don't add application-specific logic here.

2. **Use for All UI Elements**: Always use these components instead of importing from gluestack-ui directly.

3. **Keep Simple**: Maintain a simple API that closely matches gluestack-ui's original components.

4. **Support All Platforms**: Ensure all components work properly on both web and native platforms.

5. **Minimize Dependencies**: These components should have minimal dependencies beyond gluestack-ui.

## Component Usage

Import components from the `/components/ui` directory:

```tsx
import { Button, Text, Box } from '@/components/ui';

function MyComponent() {
  return (
    <Box>
      <Text>Hello World</Text>
      <Button onPress={() => console.log('Pressed')}>
        <ButtonText>Press Me</ButtonText>
      </Button>
    </Box>
  );
}
```

## Custom Components

For application-specific components, create them in `/components/custom/ui` by composing these base components rather than modifying them directly.

## Available Components

This directory includes wrappers for all gluestack-ui components:

- Layout components: `Box`, `HStack`, `VStack`, `Center`, etc.
- Typography components: `Text`, `Heading`
- Form components: `Button`, `Input`, `Select`, etc.
- Feedback components: `Alert`, `Toast`, `Progress`
- Disclosure components: `Accordion`, `Menu`, `Modal`, etc.
- Media components: `Avatar`, `Image`
- And more...

Refer to the [gluestack-ui documentation](https://gluestack.io/ui/docs/home/overview/quick-start) for detailed information on component props and usage.