const path = require('path');

const DIST_PATH = path.join(__dirname, '..', 'dist', 'evo-ui-kit');
const SRC_PATH = path.join(__dirname, '..', 'projects', 'evo-ui-kit', 'src');
const GENERATED_DIR = path.join(__dirname, '..', 'projects', 'evo-ui-kit', 'generated');
const STORYBOOK_DIST_PATH = path.join(__dirname, '..', 'dist', 'storybook');
const STORYBOOK_SRC_PATH = path.join(__dirname, '..', 'src');
const STORYBOOK_GENERATED_PATH = path.join(__dirname, '..', 'src', 'generated');

module.exports = {
    DIST_PATH,
    SRC_PATH,
    STORYBOOK_DIST_PATH,
    STORYBOOK_SRC_PATH,
    STORYBOOK_GENERATED_PATH,
    GENERATED_DIR,
};
