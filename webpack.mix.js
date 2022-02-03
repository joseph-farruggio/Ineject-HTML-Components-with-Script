let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/app.v1.1.js').setPublicPath('dist');

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

if (mix.inProduction()) {
  mix.version();
}