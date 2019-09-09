import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../typography';
const { Text } = Typography;

import Grid from '../grid';
const { Row, Col } = Grid;

storiesOf('Grid', module)
  .addParameters({ component: Grid })
  .add('Default', () => (
    <Row>
      <Col>
        <Text>Col 1</Text>
      </Col>
    </Row>
  ));

storiesOf('Grid.Row', module)
  .addParameters({ component: Row })
  .add('Default', () => (
    <Row gutter={16}>
      <Col>
        <Text>Col 1</Text>
      </Col>
    </Row>
  ));

storiesOf('Grid.Col', module)
  .addParameters({ component: Col })
  .add('Default', () => (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <Text>Col 1</Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text>Col 2</Text>
        </Col>
        <Col span={12}>
          <Text>Col 3</Text>
        </Col>
      </Row>
    </React.Fragment>
  ));
