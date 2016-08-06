const path = require('path');
const webpack = require('webpack');
const babelLoader = 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0,plugins[]=transform-object-rest-spread';

const PROD = process.env.NODE_ENV === 'production';
const DEV = !PROD;

/**
 * Entry Points
 **/

const entry = [];

if (DEV) {
  entry.push(
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  );
}

entry.push('./src/app.jsx');

/**
 * JSX Loaders
 **/

const jsxLoaders = [];

if (DEV) jsxLoaders.push('react-hot');

jsxLoaders.push(babelLoader);

/**
 * Plugins
 **/

const plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEV__: DEV,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (PROD) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  );
}

/**
 * Export Webpack Config
 **/

module.exports = {
  entry,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: jsxLoaders, exclude: /node_modules/, includes: ['./src/app.jsx', path.join(__dirname, 'src')] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.s[ac]ss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|ttf|woff|svg|otf|eot|svg).*?$/, loader: 'file-loader' },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins,
};
