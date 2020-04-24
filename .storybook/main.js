module.exports = {
  presets: [
    {
      name: "storybook-addon-deps/preset",
      options: {
        exclude: /^@babel/,
      },
    },
    {
      name: "@storybook/preset-create-react-app",
    },
  ],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
};
