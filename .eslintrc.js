module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "plugins": [
        "@typescript-eslint",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            "accessibility": "no-public",
        }],
        "@typescript-eslint/no-parameter-properties": ["error", {
            "allows": ["public", "readonly", "private", "protected"],
        }],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-use-before-define": ["error", {
            "functions": false,
        }],
        "@typescript-eslint/no-explicit-any": 0, // TODO
        "@typescript-eslint/camelcase": ["error", {
            "properties": "never",
        }],
    },
};