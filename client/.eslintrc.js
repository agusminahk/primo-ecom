module.exports = {
  env: {
    browser: true,
    es5: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    'react/display-name': 1,
    'react/jsx-curly-brace-presence': [
      1,
      {
        props: 'never',
        children: 'never',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': [
      1,
      {
        prefer: 'type-imports',
      },
    ],
    'import/no-unresolved': 0,
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    React: 'writable',
  },
};
