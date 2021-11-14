const path = require('path');

const eslintConfig = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    babelOptions: {
      configFile: path.join(__dirname, './babel.config.js'),
    },
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['jsx-a11y', 'import', 'prettier', 'react'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'stories/**', 'src/**/*.stories.js'],
      },
    ],
    'no-eval': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'warn',
    'import/no-cycle': 0,
    'linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      1,
      {
        custom: 'ignore',
      },
    ],
    'react/destructuring-assignment': [0],
    'react/prefer-stateless-function': [0],
    'no-await-in-loop': [0],
    'no-param-reassign': [0],
    'no-restricted-exports': [0],
    'import/prefer-default-export': [0],
    'no-unused-vars': [0],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};

module.exports = eslintConfig;
