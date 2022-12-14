module.exports = {
  env: {
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
  plugins: ['@typescript-eslint', 'node', 'promise', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node',
    'plugin:promise',
    'prettier',
  ],
  rules: {
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
};
