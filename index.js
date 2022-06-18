module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "globals": {
    "document": "readonly",
    "navigator": "readonly",
    "window": "readonly"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "eslint-plugin-promise", "prettier"],
  "rules": {
    "prettier/prettier": "warn",
    "no-extra-semi": "error",
    curly: "error",
    "no-else-return": "error",
    "default-param-last": "error",
    "no-lone-blocks": "error",
    "no-unused-vars": "off",
    "no-var": "error",
    "prefer-const": "error",
    yoda: "error",
    // eslint-plugin-vue
    "vue/no-unused-components": "warn",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/v-on-function-call": ["error", "never"],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/no-unused-vars": "warn",
    // eslint-plugin-promise
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/no-nesting": "error",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "error",
    "promise/valid-params": "error",
    "promise/prefer-await-to-then": "warn",
    "promise/always-return": "error",
    // @typescript-eslint
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-restricted-imports": ["error", "@apollo/client"],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/array-type": ["error", "array"]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  }
}

