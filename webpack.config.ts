import HTMLWbpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(
    __dirname,
    'src',
    'index.ts'
  ),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].ts',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new HTMLWbpackPlugin({
      template: path.resolve(
        __dirname,
        'public',
        'index.html'
      ),
    }),
    new webpack.ProgressPlugin(),
  ],
};

export default config;