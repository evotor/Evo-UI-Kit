const gulp = require('gulp');
const postcss = require('gulp-postcss');
const parser = require('postcss-scss');
const url = require('postcss-url');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const convertIcons = require('./icons-build');

const distPath = path.join(__dirname, 'dist', 'evo-ui-kit');
const srcPath = path.join(__dirname, 'projects', 'evo-ui-kit', 'src');
const storybookDistPath = path.join(__dirname, 'dist', 'storybook');
const storybookSrcPath = path.join(__dirname, 'src');

const postcssOptions = {
    parser: parser
};

const inlineURL = () => gulp.src(path.join(srcPath, 'lib/styles/**/*.scss'))
    .pipe(postcss([
            url({
                url: 'inline',
                encodeType: 'base64',
            }),
        ],
        postcssOptions
    ))
    .pipe(gulp.dest(path.join(distPath, 'styles')));

const buildUIKit = () => childProcess.execSync('ng build evo-ui-kit --prod', {stdio: 'inherit'});

const copyReadme = (cb) => fs.copyFile(
    path.join(__dirname, 'README.md'),
    path.join(distPath, 'README.md'),
    cb
);

const copyReleaserc = () => fs.copyFileSync(
    path.join(srcPath, '..', 'package-releaserc.json'),
    path.join(distPath, '.releaserc.json')
);

const buildStorybook = (cb) => {
    childProcess.execSync(`build-storybook -c .storybook -o ${storybookDistPath}`, {stdio: 'inherit'});
    return cb();
};

const copyStorybookAssets = (cb) => {
    gulp
        .src(path.join(storybookSrcPath, 'assets/*'))
        .pipe(gulp.dest(storybookDistPath));
    return cb();
};

gulp.task('storybook', gulp.parallel(buildStorybook, copyStorybookAssets));

gulp.task('default', (cb) => {
    convertIcons();
    buildUIKit();
    inlineURL();
    copyReleaserc();
    copyReadme(cb);
});
