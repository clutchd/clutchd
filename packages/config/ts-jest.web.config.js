const config = {
  ...require("./ts-jest.base.config"),

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "!<rootDir>/**/index.{js,ts,jsx,tsx}", // ignore index files
  ],
};

module.exports = config;
