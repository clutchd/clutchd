import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context(
  '../components/',
  true,
  /\.stories\.(js|ts|tsx|mdx)$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
