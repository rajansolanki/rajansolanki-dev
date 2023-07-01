import linkerPlugin from '@angular/compiler-cli/linker/babel';
import TranspilePlugin  from 'transpile-webpack-plugin';

import { dirname , resolve, join} from 'path';
import { fileURLToPath } from 'url';
import {glob} from 'glob'

const __dirname = dirname(fileURLToPath(import.meta.url));

// const glob = require('glob');

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    entries[file.replace('src/', '')] = join(__dirname, file);
  });

  return entries;
}

export default {
  // entry: './temp/ll-cart',
  // entry: getEntries('./dist1/**/*.js'),
  entry: getEntries('./node_modules/@angular/**/*.js'),
  output: {
    // filename: 'main2.mjs',
    path: resolve(__dirname, 'dist'),
  },
  // mode: 'none',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [linkerPlugin],
            compact: false,
            cacheDirectory: true,
          }
        }
      }
    ]
  },
  plugins: [], 
  // plugins: [new TranspilePlugin({
  // })],
}