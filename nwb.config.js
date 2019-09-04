module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: '@clutchd/ui',
      externals: {
        react: 'React'
      }
    }
  }
};
