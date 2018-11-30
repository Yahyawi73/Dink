import { configure } from '@storybook/react';
import {withInfo} from "@storybook/addon-info";


function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
  })
);

