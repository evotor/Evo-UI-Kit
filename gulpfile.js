const gulp = require('gulp');
const postcss = require('gulp-postcss');
const parser = require('postcss-scss');
const url = require('postcss-url');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const {buildColorIcons, buildMonochromeIcons} = require('./scripts/gulp-icons-build');

const {
    DIST_PATH,
    SRC_PATH,
    STORYBOOK_DIST_PATH,
    STORYBOOK_SRC_PATH,
    GENERATED_DIR,
    ICONS_PATH,
} = require('./scripts/gulp-config');

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

const copyGeneratedAssets = (cb) => {
    gulp.src(path.join(GENERATED_DIR, 'assets/**/*')).pipe(gulp.dest(path.join(DIST_PATH, 'assets')));
    return cb();
};

const copyIconsAssets = (cb) => {
    gulp.src(path.join(ICONS_PATH, '**/*')).pipe(gulp.dest(path.join(DIST_PATH, 'assets/icons')));
    return cb();
};

const copyReadme = (cb) => fs.copyFile(path.join(__dirname, 'README.md'), path.join(DIST_PATH, 'README.md'), cb);

const copyReleaserc = () =>
    fs.copyFileSync(path.join(SRC_PATH, '..', 'package-releaserc.json'), path.join(DIST_PATH, '.releaserc.json'));

const buildStorybook = (cb) => {
    childProcess.execSync(`ng run evo-ui-kit:build-storybook`, {stdio: 'inherit'});
    return cb();
};

gulp.task('storybook', gulp.series(buildStorybook));

gulp.task('buildMonochromeIcons', (cb) => {
    buildMonochromeIcons();
    return cb();
});

gulp.task('buildColorIcons', (cb) => {
    buildColorIcons();
    return cb();
});

gulp.task('copyGeneratedAssets', (cb) => {
    copyGeneratedAssets(cb);
    return cb();
});

gulp.task('default', (cb) => {
    buildMonochromeIcons();
    buildColorIcons();
    buildUIKit();
    inlineURL();
    copyReleaserc();
    copyReadme(cb);
    copyGeneratedAssets(cb);
    copyIconsAssets(cb);
});
