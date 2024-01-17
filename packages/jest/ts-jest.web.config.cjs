const base = require("./ts-jest.base.config.cjs");

const config = {
  ...base,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    ...base.collectCoverageFrom,
    "!<rootDir>/**/index.{js,ts,jsx,tsx}", // ignore index files
  ],
};

module.exports = config;
