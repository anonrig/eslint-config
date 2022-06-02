module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:ava/recommended',
    'plugin:import/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['ava', 'sort-keys-fix', 'import', 'security', 'prettier'],
  rules: {
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'newlines-between': 'always-and-inside-groups',
        'warnOnUnassignedImports': true,
      },
    ],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        printWidth: 100,
        quoteProps: 'consistent',
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
      { usePrettierrc: false },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
}
