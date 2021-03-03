module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    "no-unused-vars": "off",
    "semi": ["error", "always"]
  },
  "plugins": [
    "frontmatter"
  ]
}
