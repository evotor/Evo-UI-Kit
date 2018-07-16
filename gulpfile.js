const gulp = require('gulp');
const postcss = require('gulp-postcss');
const scssParser = require('postcss-scss');
const postcssUrl = require('postcss-url');

const postcssOptions = {
  parser: scssParser
};

const inlineURL = () => gulp.src('./projects/evo-ui-kit/src/lib/styles/**/*.scss')
  .pipe(postcss([
      postcssUrl({
        url: 'inline',
        encodeType: 'base64',
      }),
    ],
    postcssOptions
  ))
  .pipe(gulp.dest('./dist/evo-ui-kit/styles'));

gulp.task('inline', () => {
  inlineURL();
});

gulp.task('default', () => {
  inlineURL();
});