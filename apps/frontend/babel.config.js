module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ],
      "nativewind/babel",
    ],

    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@/app": "./app",
            "@/assets": "./assets",
            "@/config": "./config",
            "@/hooks": "./hooks",
            "@/features": "./features",
            "@/generated": "./generated",
            "@/components": "./components",
            "@/providers": "./providers",
            "@/utils": "./utils",
            "@/stores": "./stores",
          },
        },
        "react-native-reanimated/plugin",
      ],
    ],
  };
};
