import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {
  WebpackPluginInstance,
} from 'webpack';
import { BuildPaths } from './types/config';

export function buildPlugins(
  paths: BuildPaths
): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
