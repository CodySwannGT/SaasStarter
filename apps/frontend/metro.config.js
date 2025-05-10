const { getSentryExpoConfig } = require("@sentry/react-native/metro");
const { withNativeWind } = require("nativewind/metro");

const config = getSentryExpoConfig(__dirname, {
  annotateReactComponents: true,
  isCSSEnabled: true,
});

module.exports = withNativeWind(config, {
  input: "./global.css",
  output: "./output.css",
});
