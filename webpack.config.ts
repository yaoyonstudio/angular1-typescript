import * as webpack from 'webpack'
import * as path from 'path'
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
declare const __dirname: any;

const myPlugins: Array<any> = [
  new ExtractTextPlugin({
    filename: 'css/style.css',
    allChunks: true,
    disable: process.env.NODE_ENV === 'development'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks: Infinity
  })
]

const config: webpack.Configuration = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['./src/css/style.scss', './src/app.ts'],
    vendor: ['angular', '@uirouter/angularjs']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader', 
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ]
                }
              } 
            }, 
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
          failOnHint: true
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',  
        exclude: /node_modules/
      }
    ]
  },
  plugins: myPlugins
}

export default config