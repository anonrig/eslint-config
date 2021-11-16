module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:ava/recommended",
    "plugin:import/recommended",
    "plugin:security/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["ava", "sort-keys-fix", "import", "security"],
  "rules": {
    "import/order": [
      "error",
      {
        "alphabetize": {
          "caseInsensitive": true,
          "order": "asc"
        },
        "newlines-between": "always-and-inside-groups",
        "warnOnUnassignedImports": true
      }
    ],
    "max-len": ["error", 100, 2, {
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreUrls": true
    }],
    "object-curly-newline": [
      "error",
      {"multiline": true}
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": true,
        "minKeys": 2,
        "natural": false
      }
    ],
    "sort-keys-fix/sort-keys-fix": "warn"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".mjs",
          ".cjs",
          ".d.ts"
        ]
      }
    }
  }
}
