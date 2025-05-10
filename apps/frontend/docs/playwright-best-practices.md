# Playwright Best Practices

This guide outlines best practices for writing end-to-end tests with Playwright.

## Test Organization

- Organize tests by feature and user story
- Use descriptive file and test names
- Group related tests into describe blocks

## Selectors

Use selectors in this order of preference:

1. Test IDs (`getByTestId`)
2. Accessibility attributes (`getByRole`, `getByLabel`)
3. Text content (`getByText`) as a last resort

```typescript
// BEST
await page.getByTestId("submit-button").click();

// GOOD
await page.getByRole("button", { name: "Submit" }).click();

// ACCEPTABLE
await page.getByLabel("Email").fill("user@example.com");

// AVOID when possible
await page.getByText("Submit").click();
```

## Test Structure

Follow the AAA (Arrange-Act-Assert) pattern:

```typescript
test("user can add an item to cart", async ({ page }) => {
  // Arrange: Set up the test state
  await page.goto("/products/1");

  // Act: Perform the action being tested
  await page.getByTestId("add-to-cart-button").click();

  // Assert: Verify the outcome
  await expect(page.getByTestId("cart-count")).toHaveText("1");
});
```

## Page Objects

Use page objects to encapsulate page-specific logic:

```typescript
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async navigateTo() {
    await this.page.goto("/login");
  }

  async login(email: string, password: string) {
    await this.page.getByTestId("email-input").fill(email);
    await this.page.getByTestId("password-input").fill(password);
    await this.page.getByTestId("login-button").click();
  }
}

// In your test
const loginPage = new LoginPage(page);
await loginPage.navigateTo();
await loginPage.login("user@example.com", "password123");
```

## Waiting Strategies

- Prefer auto-waiting methods (`click`, `fill`, etc.)
- Use explicit assertion waits when needed
- Avoid arbitrary timeouts (`page.waitForTimeout`)

```typescript
// GOOD - Playwright will auto-wait
await page.getByTestId("submit-button").click();
await expect(page.getByTestId("success-message")).toBeVisible();

// AVOID
await page.getByTestId("submit-button").click();
await page.waitForTimeout(2000); // arbitrary and potentially flaky
```

## Test Isolation

- Each test should be independent
- Clean up after tests
- Use test-specific data

## Handling Dynamic Content

- Use built-in retrying assertions (`expect(...).toBeVisible()`)
- Define appropriate timeouts
- Consider network conditions

## Visual Testing

- Use snapshots sparingly and only for critical UI elements
- Focus on functional behavior over pixel-perfect rendering
- Consider cross-platform differences

## Performance Considerations

- Run tests in parallel when possible
- Keep test coverage focused
- Use CI caching effectively

## Debugging Techniques

- Use `page.pause()` for interactive debugging
- Create videos and screenshots on failures
- Utilize Playwright's trace viewer
