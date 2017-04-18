var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  externals: {
    lodash: '_'
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'ciena-graphlib.js',
    library: 'CienaGraphlib',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist')
  }
}
