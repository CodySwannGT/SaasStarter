// generateComponent.ts

import * as fs from "fs";
import * as path from "path";

// Get command line arguments
const [, , relativePath, componentName] = process.argv;

// Validate input
if (!relativePath || !componentName) {
  console.error("Please provide both a relative path and a component name.");
  process.exit(1);
}

// Create the directory path
const componentDir = path.join(__dirname, relativePath, componentName);

// Create the directory if it doesn't exist
fs.mkdirSync(componentDir, { recursive: true });

// Define file contents
const indexTsxContent = `export { default } from "./${componentName}Container";\n`;

const containerTsxContent = `import ${componentName}View from "./${componentName}View"

interface Props {
  title: string;
}

const ${componentName}Container = ({ title }: Props) => {
  return <${componentName}View title={title} />;
}

export default ${componentName}Container;
`;

const viewTsxContent = `import { Text } from "react-native";

interface Props {
  title: string;
}

const ${componentName}View = ({ title }: Props) => <Text>{title}</Text>;

export default ${componentName}View;
`;

// Write files
fs.writeFileSync(path.join(componentDir, "index.tsx"), indexTsxContent);
fs.writeFileSync(
  path.join(componentDir, `${componentName}Container.tsx`),
  containerTsxContent
);
fs.writeFileSync(
  path.join(componentDir, `${componentName}View.tsx`),
  viewTsxContent
);
