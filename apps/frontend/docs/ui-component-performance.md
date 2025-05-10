# UI Component Performance Guide

This document outlines best practices for ensuring optimal performance with our UI component architecture.

## Performance Benefits of Component Architecture

Our component architecture offers significant performance advantages over direct Tailwind className usage:

1. **Reduced Style Processing**: Component props generate optimized styles with less runtime overhead than className strings
2. **Bundle Size Optimization**: Reusable components reduce duplicate styling code
3. **Memoization Opportunities**: Clean component boundaries enable effective memoization
4. **Controlled Re-renders**: Props-based approach gives better control over component re-rendering
5. **Consistent Optimizations**: Performance optimizations at the component level benefit all instances

## Key Performance Principles

### 1. Optimize Component Rendering

Prevent unnecessary re-renders by implementing proper memoization:

```tsx
// Memoize components that maintain the same output for the same props
import React, { memo } from "react";
import { Box, Text } from "@/components/core";
import type { PlayerStatProps } from "./types";

// Use memo to prevent re-renders when props don't change
const PlayerStat = memo(({ label, value, ...props }: PlayerStatProps) => {
  return (
    <Box {...props}>
      <Text color="$textSecondary" fontSize="sm">
        {label}
      </Text>
      <Text fontWeight="bold" fontSize="lg">
        {value}
      </Text>
    </Box>
  );
});

// Add display name for easier debugging
PlayerStat.displayName = "PlayerStat";

export default PlayerStat;
```

### 2. Use Proper List Rendering

Optimize list rendering for large datasets:

```tsx
// Efficient list rendering with FlatList
import { FlatList } from "react-native";
import { PlayerListItem } from "@/components/custom/ui";

const PlayerListView = ({ players, onSelectPlayer }) => {
  // Extract key only once per item
  const keyExtractor = item => item.id.toString();

  // Memoize the render item function to prevent recreating on each render
  const renderItem = useCallback(
    ({ item }) => (
      <PlayerListItem player={item} onPress={() => onSelectPlayer(item)} />
    ),
    [onSelectPlayer]
  );

  return (
    <FlatList
      data={players}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      // Use getItemLayout if item heights are fixed for better performance
      getItemLayout={(data, index) => ({
        length: 72, // item height
        offset: 72 * index,
        index,
      })}
      // Implement windowing for large lists
      windowSize={5}
      maxToRenderPerBatch={10}
      initialNumToRender={10}
    />
  );
};
```

### 3. Lazy Load Components

Defer loading of non-critical components:

```tsx
// Lazy load complex components that aren't needed immediately
import React, { lazy, Suspense } from "react";
import { Spinner, Box } from "@/components/core";

// Lazy load complex component
const DetailedPlayerStats = lazy(() => import("./DetailedPlayerStats"));

const PlayerProfile = ({ player, showDetailedStats }) => {
  return (
    <Box>
      {/* Basic info always shown */}
      <PlayerBasicInfo player={player} />

      {/* Detailed stats loaded only when needed */}
      {showDetailedStats && (
        <Suspense
          fallback={
            <Box padding="md">
              <Spinner />
            </Box>
          }
        >
          <DetailedPlayerStats player={player} />
        </Suspense>
      )}
    </Box>
  );
};
```

### 4. Optimize Component Props

Use appropriate prop types and defaults for better performance:

```tsx
// Avoid unnecessary object creation in render methods
const PlayerCard = ({ player, onPress }) => {
  // BAD: Creating a new style object on every render
  return (
    <Box
      style={{
        padding: 16,
        marginBottom: 8,
        backgroundColor: "#ffffff",
      }}
    >
      <Text>{player.name}</Text>
    </Box>
  );

  // GOOD: Using component props for styling
  return (
    <Box padding="md" marginBottom="sm" bg="$white">
      <Text>{player.name}</Text>
    </Box>
  );
};
```

### 5. Use React.useMemo for Expensive Calculations

Memoize expensive calculations:

```tsx
import React, { useMemo } from "react";

const PlayerStatsPanel = ({ playerStats }) => {
  // Memoize expensive calculations
  const computedMetrics = useMemo(() => {
    return calculateAdvancedMetrics(playerStats);
  }, [playerStats]);

  return (
    <Box>
      {computedMetrics.map(metric => (
        <StatItem key={metric.id} {...metric} />
      ))}
    </Box>
  );
};
```

### 6. Optimize Images

Handle images efficiently to prevent memory issues and layout shifts:

```tsx
import { Image } from "@/components/core";

const PlayerAvatar = ({ uri, name }) => {
  return (
    <Image
      source={{ uri }}
      alt={name}
      // Set explicit dimensions
      width="$16"
      height="$16"
      // Use appropriate resize mode
      resizeMode="cover"
      // Use appropriate cache policy
      cachePolicy="memory-disk"
      // Add placeholder for better UX
      placeholder={<Box width="$16" height="$16" bg="$gray200" />}
    />
  );
};
```

### 7. Virtualize Long Lists

Use virtualization for long scrollable lists:

```tsx
import { VirtualizedList } from "react-native";

const VirtualizedPlayerList = ({ players }) => {
  const getItem = (data, index) => data[index];
  const getItemCount = data => data.length;

  const renderItem = useCallback(
    ({ item }) => <PlayerListItem player={item} />,
    []
  );

  return (
    <VirtualizedList
      data={players}
      getItem={getItem}
      getItemCount={getItemCount}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
};
```

## Web-Specific Optimizations

For web applications:

### 1. Optimize Bundle Size

Ensure tree-shaking works effectively with your component imports:

```tsx
// Good - supports tree-shaking
import { Box, Text } from "@/components/core";

// Avoid - imports entire library
import * as Components from "@/components/core";
```

### 2. Code Splitting

Use dynamic imports for route-based code splitting:

```tsx
// App.tsx
import React, { lazy, Suspense } from "react";
import { Router, Route } from "react-router-dom";
import { Spinner } from "@/components/core";

// Lazy load pages
const HomePage = lazy(() => import("./pages/Home"));
const PlayerDetailsPage = lazy(() => import("./pages/PlayerDetails"));
const TeamStatsPage = lazy(() => import("./pages/TeamStats"));

const App = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Route path="/" exact component={HomePage} />
      <Route path="/player/:id" component={PlayerDetailsPage} />
      <Route path="/team/:id" component={TeamStatsPage} />
    </Suspense>
  </Router>
);
```

### 3. Minimize DOM Size

Keep component render output minimal:

```tsx
// Avoid excessive DOM nesting
const BadComponent = () => (
  <Box>
    <Box>
      <Box>
        <Text>Too many nested boxes</Text>
      </Box>
    </Box>
  </Box>
);

// Better approach
const GoodComponent = () => (
  <Box padding="lg">
    <Text>Minimal nesting</Text>
  </Box>
);
```

## Native-Specific Optimizations

For React Native applications:

### 1. Use Native Driver for Animations

```tsx
import { Animated } from "react-native";

const FadeInView = ({ children }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      // Use native driver for better performance
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
};
```

### 2. Optimize List Rendering

```tsx
import { FlatList } from "react-native";

const EfficientList = ({ data }) => (
  <FlatList
    data={data}
    renderItem={renderItem}
    // Optimize rendering
    removeClippedSubviews={true}
    updateCellsBatchingPeriod={50}
    initialNumToRender={10}
    maxToRenderPerBatch={10}
    windowSize={5}
    // Improve scrolling performance
    getItemLayout={getItemLayout}
    // Optimize memory usage
    maintainVisibleContentPosition={{
      minIndexForVisible: 0,
    }}
  />
);
```

## Performance Monitoring

Implement performance monitoring to track component performance:

### 1. Use React DevTools Profiler

Monitor component render performance with React DevTools Profiler.

### 2. Measure Key Metrics

Track these key metrics:

- **Time to First Meaningful Paint**: How quickly user sees content
- **Time to Interactive**: When the UI becomes responsive to user input
- **Total Bundle Size**: Especially important for web applications
- **Memory Usage**: Particularly important for mobile applications
- **Frame Rate During Scrolling**: Should maintain 60fps

### 3. Set Up Performance Tests

Create automated performance tests for critical components:

```jsx
// Example performance test using jest
import { render } from "@testing-library/react-native";
import { PlayerList } from "@/components/custom/ui";

describe("PlayerList Performance", () => {
  it("renders 100 items efficiently", () => {
    // Generate test data
    const players = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      name: `Player ${i}`,
      team: `Team ${i % 10}`,
    }));

    // Measure render time
    const start = performance.now();
    render(<PlayerList players={players} />);
    const end = performance.now();

    // Assert render time is acceptable
    expect(end - start).toBeLessThan(100);
  });
});
```

## Conclusion

Performance is a critical aspect of our UI component architecture. By following these guidelines, we can ensure our components are not only reusable and consistent but also highly performant across all platforms.

Remember that performance optimization is an ongoing process. Regularly profile your components and identify areas for improvement as the application grows.
