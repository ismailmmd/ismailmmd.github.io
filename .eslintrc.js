module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['next/core-web-vitals', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    // Prettier rules
    'prettier/prettier': 'error',

    // React specific rules
    'react/react-in-jsx-scope': 'off', // Not needed with Next.js
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off', // Optional props don't need defaults in JS
    'react/function-component-definition': 'off', // Allow both function and arrow functions
    'react/forbid-prop-types': 'off', // Allow prop-types any for flexibility

    // Import rules
    'import/prefer-default-export': 'off',

    // General rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.test.*'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off', // Don't require prop-types in tests
        'react/jsx-no-useless-fragment': 'off', // Allow fragments in tests
      },
    },
  ],
};
