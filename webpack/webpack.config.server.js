import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import cssModulesValues from 'postcss-modules-values';
import {basename} from '../src/universal/utils/basename';

const root = process.cwd();
const serverInclude = [path.join(root, 'src', 'server'), path.join(root, 'src', 'universal')];
const globalCSS = path.join(root, 'src', 'universal', 'styles', 'global');

const prefetches = [
  'joi/lib/index.js',
  'redux-form/lib/index.js',
  'material-ui/lib/dialog.js',
  'material-ui/lib/radio-button.js',
  'material-ui/lib/radio-button-group.js',
  'material-ui/lib/text-field.js'
];
const prefetchPlugins = prefetches.map(specifier => new webpack.PrefetchPlugin(specifier));

export default {
  // devtool: 'source-map',
  context: path.join(root, 'src'),
  entry: {prerender: 'universal/routes/index.js'},
  target: 'node',
  output: {
    path: path.join(root, 'build'),
    chunkFilename: '[name]_[chunkhash].js',
    filename: '[name].js',
    sourceMapFilename: '[name]_[hash].js.map',
    libraryTarget: 'commonjs2',
    publicPath: (basename ? `/${basename}` : '') + '/static/'
  },
  // ignore anything that throws warnings & doesn't affect the view
  externals: ['isomorphic-fetch', 'es6-promisify', 'socketcluster-client', 'joi', 'hoek', 'topo', 'isemail', 'moment'],
  postcss: [cssModulesValues],
  resolve: {
    extensions: ['.js'],
    modules: [path.join(root, 'src'), 'node_modules']
  },
  plugins: [...prefetchPlugins,
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    new webpack.DefinePlugin({
      '__CLIENT__': false,
      '__PRODUCTION__': true,
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.txt$/, loader: 'raw-loader'},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000'},
      {test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader'},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('fake-style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss'),
        include: serverInclude,
        exclude: globalCSS
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('fake-style', 'css'),
        include: globalCSS
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: serverInclude
      }
    ]
  }
};
