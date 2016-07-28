/*
 * Webpack Config
 */

var webpack = require('webpack');
var path    = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
  //console.log(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {
  console.log('Error', e);
} finally {

}

module.exports = {

  // Entry
  entry : [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],

  externals : {
    jquery : 'jQuery'
  },

  plugins : [
    new webpack.ProvidePlugin({
      '$'      : 'jquery',
      'jQuery' : 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor : {
        warnings : false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
      }
    })
  ],

  //Output
  output : {
    path      :  __dirname,
    filename  : './public/bundle.js'
  },

  //Code Transformations
  resolve : {
    root  : __dirname,
    modulesDirectories : [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias : {
      app             : 'app',
      actions         : 'app/actions/actions.jsx',
      reducers        : 'app/reducers/reducers.jsx',
      configureStore  : 'app/store/configureStore.jsx'
    },
    extensions  : ['','.js','.jsx']
  },

  //module: loader
  module  : {
    loaders : [
      {
        loader  : 'babel-loader',
        query : {
          presets : ['react','es2015','stage-0']
        },
        test    : /\.jsx?$/,
        exclude : /(node_modules|bower_components)/
      }
    ]
  },
  devtool : process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
