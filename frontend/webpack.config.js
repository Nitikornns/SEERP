var path = require('path')
var webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');
const { VueLoaderPlugin } = require('vue-loader')
var WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  //entry: './src/main.js',
  context: __dirname,
  entry: './src/main.js',
  //output: {
  //  path: path.resolve(__dirname, './dist'),
  //  publicPath: '/dist/',
  //  filename: 'build.js'
  //},

  output: {
    path: require('path').resolve('./assets/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:8080/dist/',
  },
  optimization: {
    minimizer: [
             new UglifyJSPlugin({
                 uglifyOptions: {
                     output: {
                         comments: false
                     },
                     compress: {
                         warnings: false,
                         drop_debugger: true,
                         drop_console: true
                     }
                 }
             }),
         ]
   },

  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: './assets/bundles/webpack-stats.json',
    }),
    new WriteFilePlugin()

  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  optimization: {
    minimize: false
  },
}


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          compress: {
            warnings: false,
          },
        }),
      ],
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])

  
}
