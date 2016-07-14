import path from 'path';
import { argv } from 'yargs';

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: !argv.watch,
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],

    files: [
      // include some polyfills for babel and phantomjs
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      // sets up useful globals for every test run
      {
        pattern: './test_helper.js',
        watched: true,
        served: true,
        included: true,
      },
      './src/components/**/*.test.js',
    ],
    preprocessors: {
      // these files we want to be precompiled with webpack
      // also run tests throug sourcemap for easier debugging
      './src/components/**/*.test.js': ['webpack', 'sourcemap'],
      './test_helper.js': ['webpack'],
    },
    webpack: {
       devtool: 'cheap-module-source-map',
       resolve: {
        root: path.resolve(__dirname, './src'),
        extensions: ['', '.js', '.jsx'],
        alias: { sinon: 'sinon/pkg/sinon' },
      },
      module: {
        noParse: [ /node_modules\/sinon\// ],
        loaders: [
          { test: /\.json$/, loader: 'json' },
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
          { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
        ],
      },
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
      },
    },
    webpackMiddleware: {
      noInfo: true,
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
    ],
  });
};
