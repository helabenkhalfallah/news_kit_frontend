module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "prettier/react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "prettier/prettier": "error",
        "require-jsdoc": [
            "error",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "ClassDeclaration": true,
                    "MethodDefinition": false,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": false
                }
            }
        ],
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions":
                    [
                        "withApollo.js",
                        "_document.js",
                        "_app.js",
                        "App.js",
                        "Routes.js",
                        "index.js",
                        ".jsx"
                    ]
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [1, 120, 2, { ignoreComments: true }],
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            2,
            "double",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "comma-dangle": [
            2,
            {
                "arrays": "ignore",
                "objects": "ignore",
                "imports": "ignore",
                "exports": "ignore",
                "functions": "ignore"
            }
        ],
        "operator-linebreak": [
            2,
            "before",
            {
                "overrides": {
                    "&&": "after",
                    "?": "after",
                    ":": "after"
                }
            }
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ]
    }
};