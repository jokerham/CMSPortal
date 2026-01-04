module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    '@typescript-eslint',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // disables conflicting rules
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Prettier errors show as ESLint errors
    'prettier/prettier': 'error',

    // Vite / React 18
    'react/react-in-jsx-scope': 'off',

    // Optional strictness tweaks
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
