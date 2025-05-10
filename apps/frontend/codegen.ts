import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.EXPO_PUBLIC_GRAPHQL_BASE_URL,
  documents: [
    // "**/*.tsx",
    // "**/*.ts",
    "**/*.graphql",
    "./operations.graphql",
    "!**/node_modules",
    // "!graphql",
    "!generated",
  ],
  generates: {
    "generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        scalars: {
          DateTime: "string",
          JSONObject: "Record<string, any>",
        },
      },
    },
  },
};

export default config;
