import React from 'react';

import { storiesOf } from '@storybook/react';

import DocLayout from '../doc-layout';

import MDX from './docs/index.mdx';

storiesOf('DocLayout', module).add(
  'with text',
  () => (
    <DocLayout
      title={'Test Doc'}
      category={'Testing'}
      description={'This is a test document.'}
    />
  ),
  {
    docs: MDX
  }
);
