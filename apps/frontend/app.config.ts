import { ConfigContext, ExpoConfig } from "expo/config";

import { version } from "./package.json";

// CHANGE THIS WHEN ADDING A NEW NATIVE MODULE. This will require a new build.
const runtimeVersion = "1.0.0";
const projectId = "your-project-id"; // Replace with actual project ID when available
const bundleIdentifier = "com.mycompany.frontend";
const appName = "Frontend";

const stage = process.env.STAGE ?? "dev";
const addendum = stage === "production" ? "" : `-${stage}`;

// Parse version components (e.g., "1.0.17" -> [1, 0, 17])
const versionParts = version.split(".").map(part => parseInt(part, 10));

// Calculate build number using a formula that ensures it always increases with version changes
// BASE + Major version * 10000 + Minor version * 100 + Patch version
const BASE_BUILD_NUMBER = 100000;
const buildNumber =
  BASE_BUILD_NUMBER +
  versionParts[0] * 10000 +
  versionParts[1] * 100 +
  versionParts[2];

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    version,
    name: `${appName}${addendum}`,
    scheme: `${appName.toLowerCase().replace(/ /g, "-")}${addendum}`,
    runtimeVersion,
    android: {
      ...config.android,
      googleServicesFile:
        process.env[`GOOGLE_SERVICES_JSON_${stage.toUpperCase()}`],
      package: `${bundleIdentifier}${addendum.replace(/-/g, "_")}`,
      versionCode: buildNumber,
    },
    ios: {
      ...config.ios,
      bundleIdentifier: `${bundleIdentifier}${addendum}`,
      buildNumber: buildNumber.toString(),
    },
    updates: {
      ...config.updates,
      url: `https://u.expo.dev/${projectId}`,
    },
    extra: {
      eas: {
        projectId,
      },
    },
  } as ExpoConfig;
};
