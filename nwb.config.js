module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'envelope-ui',
      externals: {
        react: 'React'
      }
    }
  }
};
