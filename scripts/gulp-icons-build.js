const fs = require('fs');
const path = require('path');
const rmdir = require('rimraf');
const {SRC_PATH, GENERATED_DIR, STORYBOOK_GENERATED_PATH} = require('./gulp-config');
const ICONS_DIR_SRC = path.join(SRC_PATH, 'svg/monochrome-icons');
const ICONS_DIR_DIST = path.join(SRC_PATH, '..', 'icons'); // monochrome icons dist
const COLOR_ICONS_DIR_DIST = path.join(GENERATED_DIR, 'assets/color-icons'); // color icons dist
const FILE_POSTFIX = /(_24px)?\.svg/;
const ATTRS_TO_CLEAN = ['fill'];

const prepaceContent = (content) => {
    const str = content.toString();
    const svgExp = /(\<svg\s.*\>)|(\<\/svg>)|\n/g;

    return `<svg xmlns="http://www.w3.org/2000/svg">${str.replace(svgExp, '').trim()}</svg>`;
};

const getExpByAttrName = (attrName) => {
    const expBase = '=".*?"\\s?';
    return new RegExp(attrName + expBase, 'gm');
};

const cleanAttrs = (str, attrNames) => {
    let result = str;
    attrNames.forEach((attr) => {
        const exp = getExpByAttrName(attr);
        result = result.replace(exp, '');
    });
    return result;
};

const checkCyrilicChars = (str) => {
    if (/[а-яА-ЯЁё]/.test(str)) {
        throw new Error(`🚨 String "${str}" contains wrong characters!`);
    }
};

const packageJsonContent = `{
    "lib": { "entryFile": "index.ts" }
}`;

const createGeneratedDir = () => {
    if (!fs.existsSync(path.join(GENERATED_DIR))) {
        fs.mkdirSync(path.join(GENERATED_DIR));
        if (!fs.existsSync(path.join(GENERATED_DIR, 'assets'))) {
            fs.mkdirSync(path.join(GENERATED_DIR, 'assets'));
        }
        console.log('\x1b[32m', 'Generated assets folder created.');
    }
};

const buildMonochromeIcons = () => {
    const timeStart = Date.now();
    let iconsCount = 0;

    // Object with uniq icons names
    const iconsNames = {};
    const srcDirList = fs.readdirSync(ICONS_DIR_SRC);

    if (!srcDirList?.length) {
        console.warn('Source folder is empty');
        return;
    }

    // Remove dist folder
    if (fs.existsSync(path.join(ICONS_DIR_DIST))) {
        rmdir.sync(path.join(ICONS_DIR_DIST));
        console.log('\x1b[32m', 'Dist folder cleared.');
    }

    // Add dist folder
    fs.mkdirSync(path.join(ICONS_DIR_DIST));

    // Library file content
    let libraryContent = '';
    const categoriesList = [];

    srcDirList.forEach((childDir) => {
        checkCyrilicChars(childDir);

        const stat = fs.statSync(path.join(ICONS_DIR_SRC, childDir));

        if (!stat.isDirectory()) {
            return;
        }

        const icons = fs.readdirSync(path.join(ICONS_DIR_SRC, childDir));

        if (!icons?.length) {
            return;
        }

        const categoryName = childDir.toLowerCase().replace(/_|\s/, '-');

        // Add category directory
        if (!fs.existsSync(path.join(ICONS_DIR_DIST, categoryName))) {
            fs.mkdirSync(path.join(ICONS_DIR_DIST, categoryName));
        }

        icons.forEach((icon, i) => {
            if (/^\..+/.test(icon)) {
                return;
            }

            checkCyrilicChars(icon);

            const rawIconContent = fs.readFileSync(path.join(ICONS_DIR_SRC, childDir, icon));

            // Kebab-case 'icon-name'
            const iconName = icon.toLowerCase().replace(FILE_POSTFIX, '').replace(/_|\s/g, '-');

            // Throw Error if icon has same name
            if (iconsNames[iconName]) {
                throw new Error(
                    `Icon with name ${iconName} in category ${categoryName} already exists in ${iconsNames[iconName]}, icon name must be unique!`,
                );
            }

            // + category file
            const svgContent = prepaceContent(rawIconContent);
            const cleanPaths = cleanAttrs(svgContent, ATTRS_TO_CLEAN);

            fs.writeFileSync(path.join(ICONS_DIR_DIST, categoryName, iconName + '.svg'), cleanPaths);

            // Store icon name
            iconsNames[iconName] = categoryName;

            ++iconsCount;
        });
    });

    // Write to index.ts
    fs.writeFileSync(
        path.join(ICONS_DIR_DIST, 'index.ts'),
        `export const CATEGORY_BY_ICON_NAME = ${JSON.stringify(iconsNames)} as const;`,
    );

    // Write ng-packagr entry point
    fs.writeFileSync(path.join(ICONS_DIR_DIST, 'ng-package.json'), packageJsonContent);

    const endTime = Date.now() - timeStart;
    console.log('\x1b[32m', `Converted ${iconsCount} icons in ${endTime} ms.`);
};

const buildColorIcons = () => {
    const colorIconsDirSrc = path.join(SRC_PATH, 'svg/color-icons');
    const colorIconsDirDist = COLOR_ICONS_DIR_DIST;

    // create dist if not exists
    createGeneratedDir();

    // Remove dist folder
    if (fs.existsSync(colorIconsDirDist)) {
        rmdir.sync(colorIconsDirDist);
        console.log('\x1b[32m', 'Color icons assets folder cleared.');
    }

    // Add dist folder
    fs.mkdirSync(colorIconsDirDist);
    console.log('\x1b[32m', 'Color icons assets folder created.');

    const icons = fs.readdirSync(colorIconsDirSrc);
    if (!icons && !icons.length) {
        return;
    }

    console.log('\x1b[32m', `Found ${icons.length} color icons in source folder.`);
    console.log('\x1b[32m', `Start renaming and copying icons to assets.\n\n`);

    const iconNames = [];
    icons.forEach((icon, i) => {
        if (/^\..+/.test(icon)) {
            return;
        }

        checkCyrilicChars(icon);

        const iconContent = fs.readFileSync(path.join(colorIconsDirSrc, icon));

        // Kebab-case 'icon-name'
        const iconName = icon.toLowerCase().replace(FILE_POSTFIX, '').replace(/_|\s/gi, '-');

        // Throw Error if icon has same name
        if (iconNames[iconName]) {
            throw new Error(
                `Icon with name ${iconName} in category ${categoryName} already exists in ${iconNames[iconName]}, icon name must be unique!`,
            );
        }

        iconNames.push(iconName);
        fs.writeFileSync(path.join(colorIconsDirDist, `${iconName}.svg`), iconContent);
    });

    fs.writeFileSync(
        path.join(STORYBOOK_GENERATED_PATH, 'color-icons.ts'),
        `/** AUTOGENERATED COLOR ICONS LIST **/
export const COLOR_ICONS_LIST = [
${iconNames.map((name) => `    '${name}.svg'`).join(',\n')}
];
`,
    );

    console.log('\n\n');
    console.log('\x1b[32m', `Finished generating color icons.`);
};

exports.buildColorIcons = buildColorIcons;
exports.buildMonochromeIcons = buildMonochromeIcons;
