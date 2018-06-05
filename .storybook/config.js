import { configure } from '@storybook/angular';

const req = require.context('../src/stories', true, /\.stories\.ts$/)

function loadStories() {
  require('../src/stories');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);