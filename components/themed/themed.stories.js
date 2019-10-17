import React from 'react';
import { storiesOf } from '@storybook/react';

import Themed from '.';
import Button from '../button';

storiesOf('Themed', module)
  .addParameters({ component: Themed })
  .add('Default', () => (
    <Themed>
      <Button>Themed Button!</Button>
    </Themed>
  ));
