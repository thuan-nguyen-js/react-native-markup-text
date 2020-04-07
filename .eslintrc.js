const prettier = require('./.prettierrc.js');

module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    __DEV__: true,
  },
  plugins: ['react', 'react-native', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': ['error', prettier],
    'no-irregular-whitespace': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'error',
    'no-continue': 'off',
    camelcase: 'off',
    // camelcase: 'error',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'enforce',
        exceptions: [],
      },
    ],
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'off',
    'jest/valid-expect': 'error',
    'jest/no-identical-title': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
      },
    ],
    'no-tabs': 'error',
    'symbol-description': 'off',
    'class-methods-use-this': 'off',
    'react/no-typos': 'off',
    'no-underscore-dangle': 'off',
    radix: 'off',
    'no-restricted-globals': 'off',
    'global-require': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'state',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'rendering',
          'methods',
          'events',
          '/^set.+Ref$/',
        ],
      },
    ],
  },
};
