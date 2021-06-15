module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-docs",
    "@storybook/addon-postcss",
  ],
  typescript: {
    reactDocgen: "none",
  },
};
