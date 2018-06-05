import { configure } from '@storybook/angular';


function loadStories() {
  require('../src/stories');
  const requireComponents = require.context('../src/stories/components', true, /\.stories\.ts$/)
  requireComponents.keys().forEach((filename) => requireComponents(filename))
  const requireTypography = require.context('../src/stories/typography', true, /\.stories\.ts$/)
  requireTypography.keys().forEach((filename) => requireTypography(filename))
}

configure(loadStories, module);