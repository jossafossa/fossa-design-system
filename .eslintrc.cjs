module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-plusplus": "off",
    "linebreak-style": "off",
    "object-curly-spacing": [ "warn", "always" ],
    "array-bracket-spacing": [ "warn", "always" ],
    "computed-property-spacing": [ "warn", "always" ],
    "block-spacing": [ "warn", "always" ],
    "space-in-parens": [ "warn", "always" ],

    // use double quotes
    quotes: [ "warn", "double" ],
    
    "no-else-return": "warn",

  },
}
