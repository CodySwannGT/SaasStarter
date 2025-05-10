# Directory Structure

Our project follows a feature-based organization structure:

## Global Structure

```
/
├── app/                     # Main application routes (using Expo Router)
├── assets/                  # Static assets like images and fonts
├── components/              # Shared functionality components
│   ├── ui/                  # Gluestack UI components
│   └── custom/
│       └── ui/              # Custom built UI components
├── docs/                    # Project documentation and guides
├── features/                # Feature-specific code
├── hooks/                   # Shared hooks used across features
├── public/                  # Public files served at the root level
├── stores/                  # Global state stores
├── types/                   # Global TypeScript type definitions
└── utils/                   # Utility functions used across the application
```

## Feature Structure

```
features/
  ├── featureName/
  │   ├── components/        # Feature-specific UI components
  │   ├── hooks/             # Feature-specific custom hooks
  │   ├── utils/             # Feature-specific utility functions
  │   ├── types.ts           # TypeScript types for this feature
  │   ├── providers/         # Context providers for feature state
  │   ├── constants.ts       # Constant variable definitions
  │   ├── operations.graphql # GraphQL operations if applicable
  │   └── index.tsx          # Feature entry point
```

## Component Structure

All components follow the Container/View pattern and should be organized in a flat directory structure:

```
components/
  ├── SomeComponent/
  │   ├── SomeComponentContainer.tsx  # Logic and state
  │   ├── SomeComponentView.tsx       # UI only
  │   └── index.tsx                  # Export file
  └── AnotherComponent/
      ├── AnotherComponentContainer.tsx
      ├── AnotherComponentView.tsx
      └── index.tsx
```

## Routing Structure

The `app/` folder contains only routes and should forward requests to feature components:

```
app/
  ├── (root)/
  │   ├── (auth)/            # Authentication routes
  │   │   ├── login.tsx
  │   │   └── register.tsx
  │   ├── index.tsx          # Home page
  │   └── [...slug].tsx      # Catch-all route
  └── _layout.tsx            # Root layout
```

Routes should be thin wrappers that import and render the appropriate feature components. They should not contain business logic or complex UI components.
