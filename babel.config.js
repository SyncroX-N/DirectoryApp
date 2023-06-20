module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
          alias: {
            '@config': ['./src/config'],
            '@components': ['./src/components'],
            '@interfaces': ['./src/interfaces'],
            '@screens': ['./src/screens'],
            '@utils': ['./src/utils'],
            '@services': ['./src/services'],
            '@customTypes': ['./src/types'],
            '@providers': ['./src/providers'],
            '@hooks': ['./src/hooks'],
            '@navigation': ['./src/navigation'],
            '@repositories': ['./src/repositories'],
            '@assets': ['./assets'],
            '@queries': ['./src/queries'],
            '@generated': ['./src/generated'],
            '@client': ['./src/client'],
            '@graphql': ['./src/graphql'],
            '@validations': ['./src/validations'],
          },
        },
      ],
    ],
  };
};
