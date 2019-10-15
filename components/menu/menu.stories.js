import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../typography';
const { Text } = Typography;

import Menu from '../menu';
const { Item } = Menu;

storiesOf('Menu', module)
  .addParameters({ component: Menu })
  .add('Default', () => (
    <Menu>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
    </Menu>
  ));
