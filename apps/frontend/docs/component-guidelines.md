# Component Guidelines

## Container/View Pattern

All components should follow the Container/View pattern:

- **Container Components** (`*Container.tsx`): Handle logic, state, API calls, and data fetching
- **View Components** (`*View.tsx`): Handle rendering UI only, receiving props from containers
  - Views must use arrow function shorthand syntax: `() => (...)` instead of `() => { return (...); }`
  - All formatting and conditional logic must be in Container components
  - Views should never contain return statements in their logic (only in the main component function)
- **Index file** (`index.ts`): Export the container as the default component

Example:

```tsx
// ComponentContainer.tsx
import { useCallback, useMemo, useState } from "react";
import ComponentView from "./ComponentView";

const ComponentContainer = () => {
  const [data, setData] = useState<string>("");

  // Logic and state handling
  const formattedData = useMemo(() => {
    return data.toUpperCase();
  }, [data]);

  const handleClick = useCallback(() => {
    setData("New Value");
  }, []);

  return <ComponentView data={formattedData} onClick={handleClick} />;
};

export default ComponentContainer;

// ComponentView.tsx
import { Text, Button } from "components/ui";

interface ComponentViewProps {
  data: string;
  onClick: () => void;
}

const ComponentView = ({ data, onClick }: ComponentViewProps) => (
  <div>
    <Text>{data}</Text>
    <Button onPress={onClick}>Update</Button>
  </div>
);

export default ComponentView;

// index.ts
export { default } from "./ComponentContainer";
```

## Component Organization

- Maximum file length is 200 lines per file
- Flat directory structure - no nested component directories
- Common UI logic goes in `components/custom/ui/`
- Common container logic goes in shared hooks
- Look in `components/custom/ui/` and `components/ui/` before creating a custom component
- If a UI component doesn't exist, create it in `components/custom/ui/` so we can reuse it

## Performance Considerations

- All non-scalar props (objects, arrays) must use `useMemo`
- All function props must use `useCallback`
- Carefully manage effect dependencies

Example of proper optimization:

```tsx
// GOOD
const userDetails = useMemo(() => ({
  name: user.name,
  email: user.email
}), [user.name, user.email]);

const handleSubmit = useCallback(() => {
  // implementation
}, [dependencies]);

// BAD - Creates new object on every render
<UserProfile user={{ name: user.name, email: user.email }} />

// BAD - Creates new function on every render
<Button onPress={() => handlePress()} />
```

## Event Handler Naming

- In container components, use `handle*` for event handlers
- When passing handlers to view components, use `on*` props

Example:

```tsx
// In container
const handleSubmit = useCallback(() => {
  // implementation
}, []);

// Passing to view
return <MyView onSubmit={handleSubmit} />;
```
