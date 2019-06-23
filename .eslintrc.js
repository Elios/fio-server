// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    'init-declarations': 2,
    'quotes': ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 0,
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'camelcase': 2,
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'no-with': 2,
    'no-eval':2,
    'no-implied-eval':2,
    'no-invalid-this':2,
    'no-useless-call':2,
    'no-proto':2,
    'no-redeclare':2,
    'no-self-assign':2,
    'no-delete-var':2,
    'no-shadow':1,
    'no-undef':2,
    'no-unused-vars':2,
    'no-sync':2,
    'no-mixed-spaces-and-tabs':2,
    'rest-spread-spacing': 2,
    'yield-star-spacing': [2, 'after'],
    'arrow-parens': [2, 'always'],
    'no-new-symbol': 2,
    'no-extra-bind':2,
    'prefer-spread': 2,
    'semi-spacing': 2,
  }
}
