module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'EnvelopeUI',
      externals: {
        react: 'React'
      }
    }
  }
}
