import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../card';
import test from './IMGL4474.jpg';

storiesOf('Card', module)
  .addParameters({ component: Card })
  .add('Default', () => (
    <React.Fragment>
      <Card
        image={test}
        overlay
        title={`Best pic`}
        content={`This lorem pic ipsum is lorem really ipsum the lorem best ipsum!`}
      />
    </React.Fragment>
  ));
