const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8080
  },
  plugins: [
    // new UglifyJSPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
    // new webpack.HotModuleReplacementPlugin({
    // // Options...
    // })
  ]
}
