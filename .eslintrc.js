module.exports = {
    "env": {
        "browser": true,
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
            "never"
        ]
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": "6",
      "sourseType": "script"
    }
};
