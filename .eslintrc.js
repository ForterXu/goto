module.exports = {
    "env": {
        // "browser": true,
        "node": true,
        "es6": true,
        "commonjs": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": ["error", {
          "allow": ["warn", "error", "info"]
        }]
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": "6",
      "sourseType": "script"
    }
};
