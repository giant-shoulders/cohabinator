/* eslint global-require: 0 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

jsxLoaders.push('babel-loader?'
  + 'presets[]=es2015,'
  + 'presets[]=react,'
  + 'presets[]=stage-0,'
  + 'plugins[]=transform-object-rest-spread'
);

/**
 * Plugins
 **/

const plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEV__: DEV,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    title: 'Cohabinator',
    template: 'src/index.ejs',
    minify: {
      html5: true,
      collapseWhitespace: true,
      preserveLineBreaks: false,
      removeComments: true,
    },
  }),
];

if (PROD) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        warnings: true,
      },
      output: {
        comments: false,
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
    path: `${__dirname}/public`,
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: jsxLoaders,
        exclude: /node_modules/,
        includes: [
          './src/app.jsx',
          path.join(__dirname, 'src'),
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.(ttf|woff|otf|eot|)$/,
        loader: 'file-loader',
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack',
        ],
      },
    ],
  },
  imageWebpackLoader: {
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeEmptyAttrs: false,
        },
      ],
    },
  },
  postcss(wbpk) {
    return [
      require('postcss-import')({ addDependencyTo: wbpk }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-reporter')(),
      require('postcss-browser-reporter')(),
    ];
  },
  devtool: !PROD ? 'source-map' : null,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins,
};
