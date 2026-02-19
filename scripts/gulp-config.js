const path = require('path');

const DIST_PATH = path.join(__dirname, '..', 'dist', 'evo-ui-kit');
const SRC_PATH = path.join(__dirname, '..', 'projects', 'evo-ui-kit', 'src');
const STORYBOOK_DIST_PATH = path.join(__dirname, '..', 'dist', 'storybook');
const STORYBOOK_SRC_PATH = path.join(__dirname, '..', 'src');

module.exports = {
    DIST_PATH,
    SRC_PATH,
    STORYBOOK_DIST_PATH,
    STORYBOOK_SRC_PATH,
};
