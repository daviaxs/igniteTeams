module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          root: "./src",
          alias: {
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/shared/utils',
            '@theme': './src/shared/theme',
            '@assets': './src/shared/assets',
            '@components': './src/shared/components',
          }
        }
      ]
    ]
  };
};
