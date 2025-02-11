export const svgLoader = {
  test: /\.svg$/,
  use: {
    loader: '@svgr/webpack',
    options: {
      svgo: false,
    },
  },
};
