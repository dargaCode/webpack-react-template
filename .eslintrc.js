module.export = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "prettier"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", "jsx"]
      }
    ],
    "prettier/prettier": "off",
    "max-len": ["error", 80],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ]
  },
  "env": {
    "browser": true,
    "jest": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack.common.js"
      }
    }
  }
};
