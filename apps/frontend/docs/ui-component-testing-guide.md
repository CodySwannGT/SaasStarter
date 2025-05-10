# UI Component Testing Guide

This document outlines strategies and best practices for testing UI components within our component architecture.

## Testing Strategy Overview

Our testing approach for UI components follows this hierarchy:

1. **Unit Tests**: Test individual components in isolation
2. **Integration Tests**: Test component interactions
3. **Visual Regression Tests**: Verify visual appearance
4. **End-to-End Tests**: Test complete user flows

## Unit Testing Components

### Testing UI Components

UI components from `/components/ui` should have thorough unit tests to ensure they properly render and handle their props.

Example using React Testing Library:

```tsx
// Button.test.tsx
import { render, fireEvent } from "@testing-library/react-native";
import { Button, ButtonText } from "@/components/ui/button";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Button>
        <ButtonText>Press Me</ButtonText>
      </Button>
    );

    expect(getByText("Press Me")).toBeTruthy();
  });

  it("handles onPress event", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>
        <ButtonText>Press Me</ButtonText>
      </Button>
    );

    fireEvent.press(getByText("Press Me"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("applies variant styles correctly", () => {
    const { getByTestId } = render(
      <Button className="bg-transparent border" testID="button">
        <ButtonText>Press Me</ButtonText>
      </Button>
    );

    const button = getByTestId("button");
    // Check for specific style properties based on className
    expect(button.props.className).toContain("bg-transparent");
    expect(button.props.className).toContain("border");
  });
});
```

### Testing Custom Components

Custom components from `/components/custom/ui` should be tested for both their rendering and their logic.

```tsx
// ProfileCard.test.tsx
import { render, fireEvent } from "@testing-library/react-native";
import { ProfileCard } from "@/components/custom/ui";

describe("ProfileCard", () => {
  const mockUser = {
    name: "John Doe",
    title: "Developer",
    bio: "Full-stack developer",
    avatar: "https://example.com/avatar.jpg",
  };

  it("renders user information correctly", () => {
    const { getByText } = render(<ProfileCard user={mockUser} />);

    expect(getByText("John Doe")).toBeTruthy();
    expect(getByText("Developer")).toBeTruthy();
    expect(getByText("Full-stack developer")).toBeTruthy();
  });

  it("calls onMessage when message button is pressed", () => {
    const onMessageMock = jest.fn();
    const { getByText } = render(
      <ProfileCard user={mockUser} onMessage={onMessageMock} />
    );

    fireEvent.press(getByText("Message"));
    expect(onMessageMock).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Container/View Pattern

Test container and view components separately to ensure proper separation of concerns:

```tsx
// Container test focuses on logic
// ProfileCardContainer.test.tsx
import { render } from "@testing-library/react-native";
import ProfileCardContainer from "./ProfileCardContainer";
import ProfileCardView from "./ProfileCardView"; // Import for mocking

// Mock the view component
jest.mock("./ProfileCardView", () => jest.fn(() => null));

describe("ProfileCardContainer", () => {
  it("passes transformed data to view", () => {
    const mockUser = { name: "John", role: "admin" };

    render(<ProfileCardContainer user={mockUser} />);

    // Check that the view was called with the right props
    expect(ProfileCardView).toHaveBeenCalledWith(
      expect.objectContaining({
        user: mockUser,
        onMessage: expect.any(Function),
      }),
      expect.anything()
    );
  });
});

// View test focuses on rendering
// ProfileCardView.test.tsx
import { render } from "@testing-library/react-native";
import ProfileCardView from "./ProfileCardView";

describe("ProfileCardView", () => {
  it("renders with all provided props", () => {
    const props = {
      user: { name: "John", title: "Developer", bio: "Bio", avatar: "url" },
      onMessage: jest.fn(),
      onFollow: jest.fn(),
    };

    const { getByText } = render(<ProfileCardView {...props} />);

    expect(getByText("John")).toBeTruthy();
    expect(getByText("Developer")).toBeTruthy();
  });
});
```

## Integration Testing

Integration tests verify that components work together correctly.

```tsx
// PlayerSearchScreen.test.tsx
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import PlayerSearchScreen from "./PlayerSearchScreen";
import { searchPlayers } from "@/api/players"; // Import the API function to mock

// Mock the API call
jest.mock("@/api/players", () => ({
  searchPlayers: jest.fn(),
}));

describe("PlayerSearchScreen", () => {
  it("shows search results when user searches", async () => {
    // Setup mock response
    const mockResults = [
      { id: "1", name: "Lionel Messi", team: "Inter Miami" },
      { id: "2", name: "Cristiano Ronaldo", team: "Al-Nassr" },
    ];
    searchPlayers.mockResolvedValue(mockResults);

    const { getByPlaceholderText, getByText, findByText } = render(
      <PlayerSearchScreen />
    );

    // Enter search query
    const searchInput = getByPlaceholderText("Search players...");
    fireEvent.changeText(searchInput, "Messi");

    // Submit search
    fireEvent.press(getByText("Search"));

    // Verify results appear
    const result = await findByText("Lionel Messi");
    expect(result).toBeTruthy();
    expect(getByText("Inter Miami")).toBeTruthy();
  });
});
```

## Visual Regression Testing

Visual regression tests ensure components maintain their expected appearance.

```javascript
// Using Storybook + Chromatic or similar tool
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

// Import all variations from stories
const { Default, Primary, Secondary, Large } = composeStories(stories);

describe("Button Visual Tests", () => {
  it("renders default button correctly", async () => {
    // Render the component
    const { container } = render(<Default />);

    // Take a snapshot
    expect(container).toMatchSnapshot();
  });

  it("renders primary button correctly", async () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });

  // Additional tests for other variations
});
```

## Cross-Platform Testing

Test components on both web and native platforms to ensure consistent behavior.

```typescript
// Platform-specific tests
describe("Button on Web", () => {
  beforeAll(() => {
    // Mock Platform.OS as web
    jest.mock("react-native/Libraries/Utilities/Platform", () => ({
      OS: "web",
      select: jest.fn(obj => obj.web),
    }));
  });

  // Web-specific tests...
});

describe("Button on iOS", () => {
  beforeAll(() => {
    // Mock Platform.OS as ios
    jest.mock("react-native/Libraries/Utilities/Platform", () => ({
      OS: "ios",
      select: jest.fn(obj => obj.ios),
    }));
  });

  // iOS-specific tests...
});
```

## Testing Theme Variants

Verify components adapt correctly to different themes.

```typescript
import { GluestackUIProvider } from '@gluestack-ui/provider';
import { config } from '@/components/ui/gluestack-ui-provider/config';

describe('Button with Themes', () => {
  it('adapts to light theme', () => {
    const { getByTestId } = render(
      <GluestackUIProvider config={config} colorMode="light">
        <Button testID="button" className="dark:bg-background-800 bg-white">
          <ButtonText>Test</ButtonText>
        </Button>
      </GluestackUIProvider>
    );

    const button = getByTestId('button');
    // Check light theme styles (using className)
    expect(button.props.className).toContain('bg-white');
  });

  it('adapts to dark theme', () => {
    const { getByTestId } = render(
      <GluestackUIProvider config={config} colorMode="dark">
        <Button testID="button" className="dark:bg-background-800 bg-white">
          <ButtonText>Test</ButtonText>
        </Button>
      </GluestackUIProvider>
    );

    const button = getByTestId('button');
    // Check dark theme styles (using className)
    expect(button.props.className).toContain('bg-background-800');
  });
});
```

## Test Organization

Organize tests to mirror the component structure:

```
components/
  core/
    Button/
      Button.tsx
      Button.test.tsx
  custom/ui/
    ProfileCard/
      ProfileCardContainer.tsx
      ProfileCardContainer.test.tsx
      ProfileCardView.tsx
      ProfileCardView.test.tsx
```

## Testing Best Practices

1. **Test Component API**: Ensure components handle all their documented props correctly
2. **Test Edge Cases**: Test with empty data, long text, missing images, etc.
3. **Test Accessibility**: Verify accessibility props and proper screen reader support
4. **Test Interactions**: Verify all interactive elements work as expected
5. **Test Loading States**: Ensure components handle loading states gracefully
6. **Test Error States**: Verify components handle error states appropriately

## Benefits of Component-based Testing

Following this testing approach provides these benefits:

1. **Increased Test Coverage**: Components are tested once and used many times
2. **Faster Test Writing**: Reuse test patterns across similar components
3. **More Stable Tests**: Component encapsulation leads to less brittle tests
4. **Better Documentation**: Tests serve as usage examples for components
5. **Regression Prevention**: Catch UI regressions before they reach production

## Conclusion

A comprehensive testing strategy is critical to maintaining the quality and reliability of our UI component architecture. By testing at multiple levels (unit, integration, visual, and E2E), we ensure our components work correctly in isolation and together as a system.

Testing components properly increases development speed over time by preventing regressions and providing confidence when making changes.
