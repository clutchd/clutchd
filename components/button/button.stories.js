import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button';

storiesOf('Button', module)
  .addParameters({ component: Button })
  .add('Default', () => (
    <React.Fragment>
      <Button size="default">Default</Button>
    </React.Fragment>
  ))
  .add('Sizes', () => (
    <React.Fragment>
      <Button size="large">Large</Button>
      <Button size="default">Default</Button>
      <Button size="small">Small</Button>
    </React.Fragment>
  ))
  .add('Spacing', () => (
    <React.Fragment>
      <Button space="large">Large</Button>
      <Button space="default">Default</Button>
      <Button space="small">Small</Button>
    </React.Fragment>
  ));
