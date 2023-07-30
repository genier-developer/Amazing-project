import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.htmlFile }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:16].css',
      chunkFilename: '[name].[contenthash:16].css',
    }),
  ];
}
