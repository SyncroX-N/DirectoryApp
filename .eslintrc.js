module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        jsxSingleQuote: true,
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'no-unused-vars': 'off',
    'import/namespace': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
