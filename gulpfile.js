const gulp = require('gulp');
const postcss = require('gulp-postcss');
const parser = require('postcss-scss');
const url = require('postcss-url');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const {DIST_PATH, SRC_PATH, STORYBOOK_DIST_PATH, STORYBOOK_SRC_PATH} = require('./scripts/gulp-config');

const postcssOptions = {
    parser: parser,
};

const inlineURL = () =>
    gulp
        .src(path.join(SRC_PATH, 'lib/styles/**/*.scss'))
        .pipe(
            postcss(
                [
                    url({
                        url: 'inline',
                        encodeType: 'base64',
                    }),
                ],
                postcssOptions,
            ),
        )
        .pipe(gulp.dest(path.join(DIST_PATH, 'styles')));

const buildUIKit = () => {
    return childProcess.execSync('ng build evo-ui-kit --configuration production', {stdio: 'inherit'});
};

const copyReadme = (cb) => fs.copyFile(path.join(__dirname, 'README.md'), path.join(DIST_PATH, 'README.md'), cb);

const copyReleaserc = () =>
    fs.copyFileSync(path.join(SRC_PATH, '..', 'package-releaserc.json'), path.join(DIST_PATH, '.releaserc.json'));

const buildStorybook = (cb) => {
    childProcess.execSync(`build-storybook -c .storybook -o ${STORYBOOK_DIST_PATH}`, {stdio: 'inherit'});
    return cb();
};

const copyStorybookAssets = (cb) => {
    gulp.src(path.join(STORYBOOK_SRC_PATH, 'assets/*')).pipe(gulp.dest(STORYBOOK_DIST_PATH));
    gulp.src(path.join('./node_modules/@evotor-dev/evo-icons/dist/color/*')).pipe(
        gulp.dest(path.join(STORYBOOK_DIST_PATH, 'assets/color-icons')),
    );
    return cb();
};

gulp.task('storybook', gulp.series(buildStorybook, copyStorybookAssets));

gulp.task('default', (cb) => {
    buildUIKit();
    inlineURL();
    copyReleaserc();
    copyReadme(cb);
});
