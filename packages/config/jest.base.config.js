const config = {
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "<rootDir>/**/*.{js,ts,jsx,tsx}", // includes all files by default
    "!<rootDir>/**/*.config.*", // ignore config files
    // prettier-ignore
    "!<rootDir>/**/\..*", // ignore files that start with "."
    "!<rootDir>/**/*.d.ts", // ignore types
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "<rootDir>/coverage/",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/coverage/", // ignore code coverage report
    "/dist/", // ignore dist
    "/node_modules/", // ignore node_modules
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

module.exports = config;
