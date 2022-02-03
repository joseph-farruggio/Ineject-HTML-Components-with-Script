let mix = require('laravel-mix');

mix.js('src/index.js', 'dist').setPublicPath('dist');

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
});