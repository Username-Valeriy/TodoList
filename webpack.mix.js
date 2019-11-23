const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')


.webpackConfig({ devtool: "inline-source-map" })
    .sourceMaps()
    // .copyDirectory('resources/img', 'public/img')
    // .copyDirectory('resources/fonts', 'public/fonts')
    // .copyDirectory('resources/video', 'public/video')


    .browserSync({
        proxy: 'http://localhost:8080',
        host: 'localhost',
        open: true,
        watchOptions: {
            usePolling: false
        },
        files: [
            // 'app/**/*.php',
            'resources/views/**/*.php',
            'resources/js/**/*.js',
            'resources/css/**/*.scss',
            'public/**/css/*.css',
            'public/**/js/*.js'
        ]
    });


