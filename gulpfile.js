const gulp = require('gulp');
const postcss = require('gulp-postcss');
const parser = require('postcss-scss');
const url = require('postcss-url');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const distPath = path.join(__dirname, 'dist', 'evo-ui-kit');
const srcPath = path.join(__dirname, 'projects', 'evo-ui-kit', 'src');
const nodeModulesPath = path.join(__dirname, 'node_modules', 'evo-ui-kit');
const storybookDistPath = path.join(__dirname, 'dist', 'storybook');
const storybookSrcPath = path.join(__dirname, 'src')

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

const createSymlink = () => !fs.existsSync(nodeModulesPath) ? fs.symlinkSync(
    distPath,
    nodeModulesPath,
    'dir'
) : undefined;

const buildUIKit = () => childProcess.execSync('ng build evo-ui-kit --prod', {stdio: 'inherit'});

const copyReadme = () => fs.copyFileSync(
    path.join(__dirname, 'README.md'),
    path.join(distPath, 'README.md')
);

const copyReleaserc = () => fs.copyFileSync(
    path.join(srcPath, '..', 'package-releaserc.json'),
    path.join(distPath, '.releaserc.json')
);

const buildStorybook = () => childProcess.execSync(`build-storybook -c .storybook -o ${storybookDistPath}`, {stdio: 'inherit'});

const copyStorybookAssets = () => gulp.src(path.join(storybookSrcPath, 'assets/*'))
    .pipe(gulp.dest(storybookDistPath))

gulp.task('link', () => {
    createSymlink();
});

gulp.task('storybook', () => {
    createSymlink();
    buildStorybook();
    copyStorybookAssets();
});

gulp.task('default', () => {
    buildUIKit();
    inlineURL();
    createSymlink();
    copyReleaserc();
    copyReadme();
});
