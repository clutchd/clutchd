import { addParameters, configure } from "@storybook/react";
import theme from "./theme";

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "bottom",
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: theme,
    storySort: undefined
  }
});

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.(js|ts|tsx|mdx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
