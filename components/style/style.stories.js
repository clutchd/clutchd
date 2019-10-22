import React from 'react';
import { storiesOf } from '@storybook/react';

import { clutchd } from './themes';

import Style from '.';
import Button from '../button';

storiesOf('Style', module)
  .addParameters({ component: Style })
  .add('Default', () => <Button>Test</Button>)
  .add('Primary Color', () => (
    /** For larger theme changes, a custom theme object should be created
     *
     * <Styletheme={newTheme}>
     *   <Button>Test</Button>
     * </Style>
     *
     */

    <Style
      theme={{
        ...clutchd,
        colors: {
          ...clutchd.colors,
          primary: 'green'
        }
      }}
    >
      <Button>Test</Button>
    </Style>
  ));
