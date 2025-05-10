# Testing Guidelines

> Note: We are planning to migrate from Cypress to Playwright in Q4.

## Test Organization

- Tests are organized by feature and user story (e.g., `US-WHATEVER-1`)
- Test both happy paths and error cases
- Use helper functions for common operations to avoid duplication

## Best Practices

### Component Selection

- Don't rely on text to match. Use strong matchers like testID and aria-label
- Add testID to components to make them easier to select
- Structure tests in a way that mimics user behavior

```tsx
// GOOD - Using test ID
<Button testID="submit-button">Submit</Button>;
test("clicks the submit button", async () => {
  await page.getByTestId("submit-button").click();
});

// BAD - Using text (might break with translations)
test("clicks the submit button", async () => {
  await page.getByText("Submit").click();
});
```

### Test Structure

- Arrange: Set up test data and conditions
- Act: Perform the action being tested
- Assert: Verify the outcome

```typescript
test("user can log in", async () => {
  // Arrange
  await page.goto("/login");

  // Act
  await page.getByTestId("email-input").fill("user@example.com");
  await page.getByTestId("password-input").fill("password123");
  await page.getByTestId("login-button").click();

  // Assert
  await expect(page.getByTestId("welcome-message")).toBeVisible();
});
```

### Test Independence

- Each test should be independent of others
- Clean up after tests to avoid state leakage
- Don't rely on test ordering

## E2E Testing with Playwright (Coming in Q4)

Playwright will be used for end-to-end testing in Q4. The test directory structure will be:

```
e2e/
  ├── tests/
  │   ├── feature1/
  │   │   ├── US-ABC-1.spec.ts
  │   │   └── US-ABC-2.spec.ts
  │   └── feature2/
  │       └── US-XYZ-1.spec.ts
  ├── helpers/
  │   ├── auth.ts
  │   ├── navigation.ts
  │   └── form.ts
  └── docs/
      └── playwright-best-practices.md
```

### Test Helpers

Reuse helpers for common operations:

```typescript
// e2e/helpers/auth.ts
export async function loginAsUser(page) {
  await page.goto("/login");
  await page.getByTestId("email-input").fill("user@example.com");
  await page.getByTestId("password-input").fill("password123");
  await page.getByTestId("login-button").click();
  await page.waitForURL("/dashboard");
}

// In your test
import { loginAsUser } from "../../helpers/auth";

test("user can view profile", async ({ page }) => {
  await loginAsUser(page);
  await page.getByTestId("profile-link").click();
  await expect(page.getByTestId("profile-heading")).toBeVisible();
});
```

## Debugging Tests

- Use the Playwright interface to debug failing tests
- Use `await page.pause()` to pause execution for debugging
- Take screenshots at key points for visual verification
