module.exports = {
  ...require("@clutchd/config/ts-jest.web.config"),
  testEnvironment: "./jest-environment-jsdom.cjs",
};
