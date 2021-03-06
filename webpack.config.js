const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');

const imageTypes = ['gif', 'jpeg', 'jpg', 'png', 'svg'];
const packageEnv = ['production', 'staging'];

module.exports = function (env) {
  const envConfig = getConfig(path.resolve('config', 'env', `${env}.json`));

  var outputFilename;
  var fileloaderName;

  var buildOptions = {};

  var webpackPlugins = [
    new CopyWebpackPlugin([{
      from: path.resolve('src', 'static'),
      to: path.resolve('public', env)
    }, {
      from: path.resolve('src', 'assets', 'vendor'),
      to: path.resolve('public', env, 'assets', 'vendor')
    }]),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve('src', 'pages', 'index.html.ejs'),
      filename: path.resolve('public', env, 'index.html'),
      window: {
        env: envConfig
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
  ];

  if (packageEnv.indexOf(env) > -1) {
    outputFilename = '[name]-[hash:20].js';
    fileloaderName = '[path][name]-[hash:20].[ext]';

    webpackPlugins.push(new UglifyJSPlugin());
  } else {
    outputFilename = '[name].js';
    fileloaderName = '[path][name].[ext]';

    buildOptions.devtool = 'inline-source-map';
  }

  return {
    context: path.resolve('src'),
    entry: {
      build: path.resolve('src', 'assets', 'build'),
    },
    plugins: webpackPlugins,
    output: {
      filename: ['assets', outputFilename].join('/'),
      path: path.resolve('public', env)
    },
    devtool: buildOptions.devtool,
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: new RegExp(`.(${imageTypes.join('|')})$`),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: fileloaderName
              },
            }
          ]
        },
      ]
    },
    target: 'node',
    mode: env
  };
};

function getConfig(path) {
  return JSON.parse(fs.readFileSync(path), 'utf8');
}