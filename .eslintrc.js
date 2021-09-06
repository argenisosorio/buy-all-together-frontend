module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'standard'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "function-paren-newline": ["error", "never"]
  }
}
