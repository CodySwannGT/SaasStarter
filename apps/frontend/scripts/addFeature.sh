#!/bin/bash

# Script to create a new feature with all the necessary directories and files
# Usage: ./addFeature.sh feature-name

# Check if feature name is provided
if [ -z "$1" ]; then
  echo "Error: Feature name is required"
  echo "Usage: ./addFeature.sh feature-name"
  exit 1
fi

FEATURE_NAME=$1
FEATURE_DIR="features/$FEATURE_NAME"

# Check if feature already exists
if [ -d "$FEATURE_DIR" ]; then
  echo "Error: Feature '$FEATURE_NAME' already exists"
  exit 1
fi

# Create feature directory and subdirectories
echo "Creating feature structure for '$FEATURE_NAME'..."
mkdir -p "$FEATURE_DIR/components"
mkdir -p "$FEATURE_DIR/hooks"
mkdir -p "$FEATURE_DIR/utils"
mkdir -p "$FEATURE_DIR/providers"
mkdir -p "$FEATURE_DIR/stores"

# Create basic files
touch "$FEATURE_DIR/constants.ts"
touch "$FEATURE_DIR/types.ts"
touch "$FEATURE_DIR/operations.graphql"





echo "Feature '$FEATURE_NAME' created successfully!"
echo ""
echo "Structure:"
find "$FEATURE_DIR" -type f | sort