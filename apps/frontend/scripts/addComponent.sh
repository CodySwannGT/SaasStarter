#!/bin/bash

# Script to create a new component with Container/View pattern in a feature
# Usage: ./addComponent.sh feature-name ComponentName

# Check if all required arguments are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Error: Both feature name and component name are required"
  echo "Usage: ./addComponent.sh feature-name ComponentName"
  echo "Example: ./addComponent.sh user-profile UserCard"
  exit 1
fi

FEATURE_NAME=$1
COMPONENT_NAME=$2
FEATURE_DIR="features/$FEATURE_NAME"
COMPONENT_DIR="$FEATURE_DIR/components/$COMPONENT_NAME"

# Check if feature exists
if [ ! -d "$FEATURE_DIR" ]; then
  echo "Error: Feature '$FEATURE_NAME' does not exist"
  echo "Create it first with: ./addFeature.sh $FEATURE_NAME"
  exit 1
fi

# Check if component already exists
if [ -d "$COMPONENT_DIR" ]; then
  echo "Error: Component '$COMPONENT_NAME' already exists in feature '$FEATURE_NAME'"
  exit 1
fi

# Create component directory
echo "Creating component '$COMPONENT_NAME' in feature '$FEATURE_NAME'..."
mkdir -p "$COMPONENT_DIR"

# Create Container file
cat > "$COMPONENT_DIR/${COMPONENT_NAME}Container.tsx" << EOF
import { useCallback, useMemo, useState } from "react";
import ${COMPONENT_NAME}View from "./${COMPONENT_NAME}View";

/**
 * $COMPONENT_NAME Container Component
 * 
 * This component handles the business logic for the $COMPONENT_NAME component.
 */
interface ${COMPONENT_NAME}Props {
  // Define your props here
}

const ${COMPONENT_NAME}Container = (props: ${COMPONENT_NAME}Props) => {
  // State management
  const [state, setState] = useState<any>(null);
  
  // Memoized values
  const computedValue = useMemo(() => {
    // Compute derived state here
    return state;
  }, [state]);
  
  // Event handlers
  const handleAction = useCallback(() => {
    // Handle action here
  }, []);
  
  // Return the view component
  return (
    <${COMPONENT_NAME}View
      computedValue={computedValue}
      onAction={handleAction}
    />
  );
};

export default ${COMPONENT_NAME}Container;
EOF

# Create View file
cat > "$COMPONENT_DIR/${COMPONENT_NAME}View.tsx" << EOF
import { Text, View } from "components/ui";

/**
 * $COMPONENT_NAME View Component
 * 
 * This component handles the presentation for the $COMPONENT_NAME component.
 */
interface ${COMPONENT_NAME}ViewProps {
  computedValue: any;
  onAction: () => void;
}

const ${COMPONENT_NAME}View = ({ 
  computedValue, 
  onAction 
}: ${COMPONENT_NAME}ViewProps) => (
  <View testID="$FEATURE_NAME-$COMPONENT_NAME">
    <Text>$COMPONENT_NAME Component</Text>
  </View>
);

export default ${COMPONENT_NAME}View;
EOF

# Create index file
cat > "$COMPONENT_DIR/index.tsx" << EOF
export { default } from "./${COMPONENT_NAME}Container";
EOF

echo "Component '$COMPONENT_NAME' created successfully in feature '$FEATURE_NAME'!"
echo ""
echo "Files created:"
find "$COMPONENT_DIR" -type f | sort