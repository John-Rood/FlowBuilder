module.exports = {
  entry: './src/johnflow.js',
  output: {
    library: 'Drawflow',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'drawflow.min.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
};
