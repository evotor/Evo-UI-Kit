const fs = require('fs');
const path = require('path');
const rmdir = require('rimraf');
const ICONS_DIR_SRC = 'projects/evo-ui-kit/src/svg/monochrome-icons';
const ICONS_DIR_DIST = 'projects/evo-ui-kit/icons';
const FILE_POSTFIX = /(_24px)?\.svg/;
const ATTRS_TO_CLEAN = ['fill'];

const cleanSvgTags = (content) => {
    const str = content.toString();
    const svgExp = /(\<svg\s.*\>)|(\<\/svg>)|\n/g;
    const result = str.replace(svgExp, '').trim();
    return result;
};

const getExpByAttrName = attrName => {
    const expBase = '=".*?"\\s?';
    return new RegExp(attrName + expBase, 'gm');
};

const cleanAttrs = (str, attrNames) => {
    let result = str;
    attrNames.forEach(attr => {
        const exp = getExpByAttrName(attr);
        result = result.replace(exp, '');
    });
    return result;
};

const camelize = (str) => {
    return str
        .replace(/\s(.)/g, (s) => s.toUpperCase() )
        .replace(/\s/g, '')
        .replace(/^(.)/, (s) => s.toLowerCase() );
};

const checkCyrilicChars = (str) => {
    if (/[а-яА-ЯЁё]/.test(str)) {
        throw new Error(`🚨 String "${str}" contains wrong characters!`);
    }
}

const disableTsLint = (content) => `/* tslint:disable */\n${content}\n/* tslint:enable */\n`;

const packageJsonContent = `{
    "ngPackage": {
        "lib": {
            "entryFile": "index.ts"
        }
    }
}`;

const convertIcons = () => {
    const timeStart = Date.now();
    let iconsCount = 0;

    // Object with uniq icons names
    const iconsNames = {};
    const srcDirList = fs.readdirSync(path.join(__dirname, ICONS_DIR_SRC));

    if (!srcDirList || !srcDirList.length) {
        console.warn('Source folder is empty');
        return;
    }

    // Remove dist folder
    if (fs.existsSync(path.join(__dirname, ICONS_DIR_DIST))) {
        rmdir.sync(path.join(__dirname, ICONS_DIR_DIST));
        console.log('\x1b[32m', 'Dist folder cleared.');
    }

    // Add dist folder
    fs.mkdirSync(path.join(__dirname, ICONS_DIR_DIST));

    // Library file content
    let libraryContent = '';
    const categoriesList = [];

    srcDirList.forEach((childDir) => {
        checkCyrilicChars(childDir);

        const stat = fs.statSync(path.join(__dirname, ICONS_DIR_SRC, childDir));

        if (stat.isDirectory()) {
            const icons = fs.readdirSync(path.join(__dirname, ICONS_DIR_SRC, childDir));

            // If directory empty
            if (!icons && !icons.length) { return; }

            // Camel-case 'someCategoryName'
            const categoryVarName = camelize(childDir.toLowerCase().replace(/-|_|\s/, ' ') + 'Icons');

            // Kebab-case 'some-category-name'
            const categoryName = childDir.toLowerCase().replace(/_|\s/, '-');

            // Add category directory
            if (!fs.existsSync(path.join(__dirname, ICONS_DIR_DIST, categoryName))) {
                fs.mkdirSync(path.join(__dirname, ICONS_DIR_DIST, categoryName));
            }

            // Add to Library
            libraryContent += `import { ${categoryVarName} } from './${categoryName}';\n`;
            categoriesList.push(categoryVarName);

            // Category file content
            let iconsExport = '';
            let categoryContent = `export const ${categoryVarName} = {\n  name: '${categoryName}',\n  shapes: {\n`;
            icons.forEach((icon, i) => {
                if (/^\..+/.test(icon)) {
                    return;
                }

                checkCyrilicChars(icon);

                const rawIconContent = fs.readFileSync(path.join(__dirname, ICONS_DIR_SRC, childDir, icon));

                // Camel-case 'iconName'
                const iconVarName = camelize('icon ' + icon.toLowerCase().replace(FILE_POSTFIX, '').replace(/-|_|\s/, ' '));

                // Kebab-case 'icon-name'
                const iconName = icon.toLowerCase().replace(FILE_POSTFIX, '').replace(/_|\s/, '-');

                // Throw Error if icon has same name
                if (iconsNames[iconName]) {
                    throw new Error(`Icon with name ${iconName} in category ${categoryName} already exists in ${iconsNames[iconName]}, icon name must be unique!`);
                }

                // + category file
                const svgContent = cleanSvgTags(rawIconContent);
                const cleanPaths = cleanAttrs(svgContent, ATTRS_TO_CLEAN);
                iconsExport += `export const ${iconVarName} = '${cleanPaths}';` + (i !== (icons.length - 1) ? '\n' : '');
                categoryContent += `    '${iconName}': ${iconVarName},\n`;

                // Store icon name
                iconsNames[iconName] = categoryName;

                ++iconsCount;
            });
            categoryContent += '  }\n};\n';

            // Write to category.ts
            fs.writeFileSync(path.join(__dirname, ICONS_DIR_DIST, categoryName, 'index.ts'), `${disableTsLint(iconsExport)}\n${categoryContent}`);

            // Write ng-packagr entry point
            fs.writeFileSync(path.join(__dirname, ICONS_DIR_DIST, categoryName, 'package.json'), packageJsonContent);
        }
    });

    // Write to icons.ts
    libraryContent += `\nexport const icons = [ ${categoriesList.join(', ')} ];\n`;
    fs.writeFileSync(path.join(__dirname, ICONS_DIR_DIST, 'index.ts'), libraryContent);

    // Write ng-packagr entry point
    fs.writeFileSync(path.join(__dirname, ICONS_DIR_DIST, 'package.json'), packageJsonContent);

    const endTime = Date.now() - timeStart;
    console.log('\x1b[32m', `Converted ${iconsCount} icons in ${endTime} ms.`);
};

module.exports = convertIcons;
