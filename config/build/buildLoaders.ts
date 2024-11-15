import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/,
            localIdentName: options.isDev
              ? '[name]-[local]-[hash]'
              : '[hash:base64:8]',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          additionalData: (
            content: string
            // loaderContext: { rootContext: string }
          ) => {
            // const { rootContext } = loaderContext;
            const relativeSassFuncPath =
              './src/app/styles/variables/functions.scss';
            const relativeSassMediaPath =
              './src/app/styles/variables/media-points.scss';
            const str = `@import '${relativeSassFuncPath}';
            @import '${relativeSassMediaPath}';`;

            return str + content;
          },
        },
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
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

  return [sassLoader, svgLoader, fileLoader, babelLoader, typescriptLoader];
}
