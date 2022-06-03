
module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser"
  },
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly"
  },
  "extends": [
    "@vue/typescript/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  rules: {},
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  }
}
