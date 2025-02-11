import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { sassLoader } from '../build/loaders/buildCssLoaders';
import { svgLoader } from '../build/loaders/biuldSvgLoader';

export default ({
  config,
}: {
  config: webpack.Configuration;
}): webpack.Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.plugins.push(new webpack.DefinePlugin({ __IS_DEV: false }));
  config.module.rules.push(sassLoader(true), svgLoader);
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.tsx', '.ts', '.js');

  return config;
};
