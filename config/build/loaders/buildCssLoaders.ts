import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const sassLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/,
            localIdentName: isDev ? '[name]-[local]-[hash]' : '[hash:base64:8]',
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
};
