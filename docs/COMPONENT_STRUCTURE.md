# Component Structure Guidelines

This document outlines the component structure pattern used throughout this project.

## Container/View Pattern

We follow the Container/View pattern for our React components, which separates concerns between business logic and presentation.

### Structure

For each component:

1. **Container Component** (`ComponentNameContainer.tsx`) - Handles:
   - State management
   - Data fetching/mutations
   - Event handlers
   - Business logic
   - Passes props to the View component

2. **View Component** (`ComponentNameView.tsx`) - Handles:
   - Rendering UI elements
   - Styling
   - Receives props from Container component
   - Contains minimal to no logic

3. **Index file** (`index.ts`) - Exports:
   - The Container component as the default export
   - Other related components or types (optionally)

### Example

```tsx
// ButtonContainer.tsx
import React, { useState } from 'react';
import ButtonView from './ButtonView';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
}

const ButtonContainer = ({ 
  onPress, 
  isDisabled = false,
  ...props 
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handlePress = async () => {
    if (isDisabled || isLoading) return;
    
    setIsLoading(true);
    try {
      await onPress();
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <ButtonView 
      {...props}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      onPress={handlePress}
    />
  );
};

export default ButtonContainer;
```

```tsx
// ButtonView.tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonViewProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
  isLoading?: boolean;
}

const ButtonView = ({
  label,
  onPress,
  variant = 'primary',
  isDisabled = false,
  isLoading = false
}: ButtonViewProps) => {
  const baseClasses = 'px-4 py-2 rounded-md flex-row justify-center items-center';
  
  const variantClasses = variant === 'primary'
    ? 'bg-blue-600 ' + (isDisabled ? 'bg-opacity-50' : '')
    : 'bg-gray-200 ' + (isDisabled ? 'bg-opacity-50' : '');
  
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses}`}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : 'black'} />
      ) : (
        <Text 
          className={`font-medium ${variant === 'primary' ? 'text-white' : 'text-gray-800'}`}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonView;
```

```tsx
// index.ts
export { default } from './ButtonContainer';
export type { ButtonProps } from './ButtonContainer';
```

## Benefits

1. **Separation of Concerns** - Logic is separated from presentation
2. **Testability** - Easier to write unit tests for both logic and UI
3. **Reusability** - View components can be reused with different containers
4. **Maintainability** - Clearer organization makes code easier to maintain
5. **Collaboration** - Easier for UI designers and developers to work together

## Guidelines

1. Keep View components as pure as possible, avoiding business logic
2. Container components should not include styling or UI-specific code
3. Use TypeScript interfaces to define props for both component types
4. Export the Container as the default component via index.ts
5. When using hooks like `useEffect`, place them in the Container component
6. Views should be as dumb as possible - they render what they're given

## Styling

We use NativeWind (TailwindCSS) for styling our components:

```tsx
<View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
  <Text className="text-gray-800 dark:text-white text-lg font-medium">
    Hello World
  </Text>
</View>
```

## Folder Structure

```
components/
├── Button/
│   ├── ButtonContainer.tsx
│   ├── ButtonView.tsx
│   └── index.ts
└── Card/
    ├── CardContainer.tsx
    ├── CardView.tsx
    └── index.ts
```