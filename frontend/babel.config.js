module.exports = function (api) {
  api.cache(false);
  resetCache: true;
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv"],
      ["react-native-paper/babel"],
      [
        "module-resolver",
        {
          alias: {
            "@": "./",
          },
        },
      ],
    ],
  };
};
