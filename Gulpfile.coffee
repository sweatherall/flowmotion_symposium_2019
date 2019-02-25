gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglifyes'
rename = require 'gulp-rename'
babel = require 'gulp-babel'
LessPluginCleanCSS = require 'less-plugin-clean-css'
cleanCSS = new LessPluginCleanCSS()
less = require 'gulp-less'
pug = require 'gulp-pug'

# compile vendor scripts
gulp.task 'vendor', () ->
  gulp.src [
    'node_modules/particles.js/particles.js',
    'node_modules/smoothscroll-polyfill/dist/smoothscroll.js'
    'node_modules/aos/dist/aos.js'
    'node_modules/feather-icons/dist/feather.js'
  ]
    .pipe concat 'vendor_scripts.js' # concat all files
    .pipe gulp.dest 'public/js/' # place vendor_scripts.js
    .pipe uglify() # minify the js
    .pipe rename {extname: '.min.js'} # rename the file so it is .min
    .pipe gulp.dest 'public/js/' # vendor_scripts.min.js


# compile main scripts
gulp.task 'mainjs', () ->
  gulp.src [
    'src/js/main.js'
  ]
    # .pipe babel({ presets: ['es2015'] })
    .pipe concat 'main.js' # concat all files
    .pipe gulp.dest 'public/js/' # place vendor_scripts.js
    .pipe uglify({
                   mangle: false,
                   ecma: 6
                }) # minify the js
    .pipe rename {extname: '.min.js'} # rename the file so it is .min
    .pipe gulp.dest 'public/js/' # vendor_scripts.min.js


# css minification
gulp.task 'vendorstyles', () ->
  gulp.src [
    "node_modules/aos/dist/aos.css"
    "src/styles/hexagons.css"
    "src/styles/normalize.css"
    "src/styles/scrollanimation.css"
  ]
    .pipe concat 'vendor_styles.css'
    # .pipe rename {extname: '.min.css'} # rename the file so it is .min
    .pipe gulp.dest 'public/css/'


gulp.task 'default', () -> 