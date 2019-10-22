import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button';

storiesOf('Button', module)
  .addParameters({ component: Button })
  .add('Default', () => (
    <React.Fragment>
      <Button>Default</Button>
    </React.Fragment>
  ))
  .add('Sizes', () => (
    <React.Fragment>
      <Button size="xs">xs Button</Button>
      <Button size="sm">sm Button</Button>
      <Button size="md">md Button</Button>
      <Button size="lg">lg Button</Button>
      <Button size="xl">xl Button</Button>
    </React.Fragment>
  ))
  .add('Spacing', () => (
    <React.Fragment>
      <Button space="xs">xs Button</Button>
      <Button space="sm">sm Button</Button>
      <Button space="md">md Button</Button>
      <Button space="lg">lg Button</Button>
      <Button space="xl">xl Button</Button>
    </React.Fragment>
  ))
  .add('Sizing + Spacing', () => (
    <React.Fragment>
      <Button size="xs" space="xs">
        xs Button
      </Button>
      <Button size="sm" space="sm">
        sm Button
      </Button>
      <Button size="md" space="md">
        md Button
      </Button>
      <Button size="lg" space="lg">
        lg Button
      </Button>
      <Button size="xl" space="xl">
        xl Button
      </Button>
    </React.Fragment>
  ));
