import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';
import { sassLoader } from './loaders/buildCssLoaders';
import { svgLoader } from './loaders/biuldSvgLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: ['file-loader'],
  };

  const babelLoader = {
    test: /\.(ts|js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: ['en'],
            },
          ],
        ],
      },
    },
  };

  return [
    sassLoader(options.isDev),
    svgLoader,
    fileLoader,
    babelLoader,
    typescriptLoader,
  ];
}
