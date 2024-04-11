import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { paths } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      inject: true,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({ __IS_DEV: JSON.stringify(options.isDev) }),
  ];
}
