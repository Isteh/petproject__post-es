import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {
  WebpackPluginInstance,
} from 'webpack';
import { BuildPaths } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(
  paths: BuildPaths
): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      inject: true,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename:
        'css/[name].[contenthash].css',
    }),
  ];
}
