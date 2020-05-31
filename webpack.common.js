const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

const babelOptions = {
  presets: [['@babel/preset-env'], '@babel/preset-typescript'],
}

const env = process.env.NODE_ENV // used to check the NODE environment mode.

module.exports = {
  entry: [path.resolve(__dirname, 'src/index.ts')],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader', options: babelOptions }],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader', options: babelOptions },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/i,
        use: [
          // HMR SCSS was not working properly with ExtractCssChunks plugin, so had to used this setup
          env === 'development' ? 'style-loader' : ExtractCssChunks.loader,
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // HMR for SCSS was not working properly with ExtractCssChunks plugin, so had to used this setup
          env === 'development' ? 'style-loader' : ExtractCssChunks.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // in bytes
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ErrorOverlayPlugin(),
    new CleanWebpackPlugin(),
    new ExtractCssChunks({
      filename: 'app.styles.css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
}
