/* eslint no-console: 0 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  stats: { colors: true },
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(8080, 'localhost', (err) => {
  if (err) console.log(err);
  console.log('Listening at http://localhost:8080/');
});
