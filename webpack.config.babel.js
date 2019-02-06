const path = require('path');

export default () => (
  {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'webpack-numbers.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      library: 'webpackNumbers'
    },
    externals: {
      'lodash': {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules|bower_components)/,
          use: 'babel-loader'
        }
      ]
    },
  }
)

