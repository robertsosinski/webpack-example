module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },

  "extends": "eslint:recommended",
  "plugins": [
    "react",
    "babel"
  ],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },

  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "alert": true,
    "$": true
  },

  "rules": {
    "indent":
      ["error", 2],
    "semi":
      ["error", "always"],
    "quotes":
      ["error", "single"],
    "eqeqeq":
      ["error", "always"],
    "linebreak-style":
      ["error", "unix"],
    "no-unused-vars":
      ["error", {"argsIgnorePattern": "^_"}],

    "no-console": "off",

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}
