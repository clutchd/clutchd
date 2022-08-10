module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@clutchd/eslintconfig`
  extends: ["clutchd"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
