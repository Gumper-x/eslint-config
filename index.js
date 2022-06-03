
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
  "extends": ["plugin:@typescript-eslint/recommended", "eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "warn"
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

