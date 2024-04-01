import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';

export function buildWebpackConfig({
  mode,
  paths,
  isDev,
}: BuildOptions): Configuration {
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].ts',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
  };
}
