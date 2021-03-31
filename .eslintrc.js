module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    '@typescript-eslint/unified-signatures': 'error',
    'constructor-super': 'error',
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'semi': [
      'error',
      'always'
    ],
    'sort-keys': ['error', 'asc', {'caseSensitive': true, 'minKeys': 2, 'natural': false }]
  }
};
