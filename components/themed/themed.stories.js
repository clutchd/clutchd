import React from 'react';
import { storiesOf } from '@storybook/react';

import { clutchd } from '../themed/themes';

import Themed from '.';
import Button from '../button';

// let theme = clutchd.theme;
// theme.colors.primary = `green`;

storiesOf('Themed', module)
  .addParameters({ component: Themed })
  .add('Default', () => (
    <Themed>
      <Button>Test</Button>
    </Themed>
  ))
  .add('Primary Color', () => (
    <Themed>
      <Button>Test</Button>
    </Themed>
  ));
