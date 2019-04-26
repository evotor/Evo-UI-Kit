const fs = require('fs');
const path = require('path');
const ICONS_DIR_SRC = 'src/lib/modules/evo-icon/icons-src';
const ICONS_DIR_DIST = 'src/lib/modules/evo-icon/icons';
const FILE_POSTFIX = '_24px.svg';
const ATTRS_TO_CLEAN = ['fill-rule', 'clip-rule', 'fill'];

const timeStart = Date.now();

const cleanSvgTags = (content) => {
    const str = content.toString();
    const svgExp = /(\<svg\s.*\>)|(\<\/svg>)/g;
    const result = str.replace(svgExp, '').trim();
    return result;
}

const getExpByAttrName = attrName => {
    const expBase = '=".*?"\\s?';
    return new RegExp(attrName + expBase);
};

const cleanAttrs = (str, attrNames) => {
    let result = str;
    attrNames.forEach(attr => {
        const exp = getExpByAttrName(attr);
        result = result.replace(exp, '');
    });
    return result;
}

const convertSvg = () => {
    let iconsCount = 0;
    const srcDirList = fs.readdirSync(path.join(__dirname, ICONS_DIR_SRC));

    if (!srcDirList || !srcDirList.length) {
        console.warn('Source folder is empty');
        return;
    }

    // Create dist folder
    try {
        fs.accessSync(path.join(__dirname, ICONS_DIR_DIST));
    } catch (error) {
        fs.mkdirSync(path.join(__dirname, ICONS_DIR_DIST));
    }

    srcDirList.forEach((childDir) => {
        const stat = fs.statSync(path.join(__dirname, ICONS_DIR_SRC, childDir));

        if (stat.isDirectory()) {
            const icons = fs.readdirSync(path.join(__dirname, ICONS_DIR_SRC, childDir));

            if (!icons && !icons.length) { return; }

            // Category file content
            const categoryName = childDir.toLowerCase();
            let fileContent = `/* tslint:disable */\nexport const ${categoryName} = {\n  name: '${categoryName}',\n  paths: {\n`;
            for (const icon of icons) {
                const iconContent = fs.readFileSync(path.join(__dirname, ICONS_DIR_SRC, childDir, icon));
                const iconName = icon.toLowerCase().replace(FILE_POSTFIX, '');
                const svgContent = cleanSvgTags(iconContent);
                const cleanPaths = cleanAttrs(svgContent, ATTRS_TO_CLEAN);
                fileContent += `    '${iconName}': '${cleanPaths}',\n`;
                ++iconsCount;
            };
            fileContent += '  }\n};\n/* tslint:enable */\n';

            // Write to category.ts
            fs.writeFileSync(path.join(__dirname, ICONS_DIR_DIST, categoryName + '.ts'), fileContent);
        }
    });
    const endTime = Date.now() - timeStart;
    console.log('\x1b[32m', `Converted ${iconsCount} icons in ${endTime} ms.`);
};

convertSvg();
