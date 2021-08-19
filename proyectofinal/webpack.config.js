const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    busqueda: './src/js/busqueda.js',
    receta: './src/js/receta.js',
    recetaAleatoria: './src/js/recetaAleatoria.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'busqueda.html',
      template: './src/html/busqueda.html',
      chunks: ['busqueda']
    }),
    new HtmlWebpackPlugin({
      filename: 'receta.html',
      template: './src/html/receta.html',
      chunks: ['receta']
    }),
    new HtmlWebpackPlugin({
      filename: 'recetaAleatoria.html',
      template: './src/html/recetaAleatoria.html',
      chunks: ['recetaAleatoria']
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
            },
          },
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}