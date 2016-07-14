var path    = require('path'),
    webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry:  [
    __dirname + '/docs/index.js',
  ],
  output: {
    path: __dirname + '/docs/public',
    filename: 'bundle.js',
  },
  resolve: {
    root: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './docs'),
    ],
    extensions: ['', '.js', '.json', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },

      // Asset Loaders
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000' },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs', 'public'),
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3001,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
