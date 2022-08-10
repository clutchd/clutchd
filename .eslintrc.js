module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-clutchd`
  extends: ["clutchd"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
