import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../button';

import MDX from './docs/index.mdx';

const test = {
  main: 'blue' // theme only changes color as of now
};

storiesOf('Button', module)
  .add(
    'with text',
    () => <Button onClick={action('clicked')}>Hello World!</Button>,
    {
      docs: MDX
    }
  )

  .add(
    'with some emoji',
    () => (
      <Button onClick={action('clicked')} theme={test}>
        Test red text
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    {
      docs: MDX
    }
  );
