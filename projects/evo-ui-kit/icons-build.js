const fs = require('fs').promises;
const path = require('path');
const ICONS_DIR_SRC = 'src/assets/icons-src';
const ICONS_DIR_DIST = 'src/lib/modules/evo-icon/icons';
const FILE_POSTFIX = '_24px.svg';
const ATTRS_TO_CLEAN = ['fill-rule', 'clip-rule', 'fill'];

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

const convertSvg = async () => {
    const dirsList = await fs.readdir(path.join(__dirname, ICONS_DIR_SRC));

    if (!dirsList || !dirsList.length) {
        console.warn('Source folder is empty');
        return;
    }

    // Create dist folder
    try {
        await fs.lstat(path.join(__dirname, ICONS_DIR_DIST));
    } catch (error) {
        await fs.mkdir(path.join(__dirname, ICONS_DIR_DIST));
    }

    dirsList.forEach(async (childDir) => {
        const stat = await fs.lstat(path.join(__dirname, ICONS_DIR_SRC, childDir));

        if (stat.isDirectory()) {
            const icons = await fs.readdir(path.join(__dirname, ICONS_DIR_SRC, childDir));

            if (!icons && !icons.length) { return; }

            const categoryName = childDir.toLowerCase();

            // Category file content
            let fileContent = `/* tslint:disable */\nexport const ${categoryName} = {\n  name: '${categoryName}',\n  paths: {\n`;
            for (const icon of icons) {
                const iconContent = await fs.readFile(path.join(__dirname, ICONS_DIR_SRC, childDir, icon));
                const iconName = icon.toLowerCase().replace(FILE_POSTFIX, '');
                const svgContent = cleanSvgTags(iconContent);
                const cleanPaths = cleanAttrs(svgContent, ATTRS_TO_CLEAN);
                fileContent += `    ${iconName}: '${cleanPaths}',\n`
            };
            fileContent += '  }\n};\n /* tslint:enable */\n';

            // Write to category.ts
            await fs.writeFile(path.join(__dirname, ICONS_DIR_DIST, categoryName + '.ts'), fileContent);
        }
    });
};

convertSvg();
