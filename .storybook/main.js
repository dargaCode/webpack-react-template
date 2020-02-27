const path = require("path");
const custom = require("../webpack.dev.js");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],

  webpackFinal: config => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules }
    };
  }
};
