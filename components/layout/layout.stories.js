import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../typography';
const { Text } = Typography;

import Layout from '../layout';
const { Header, Main, Footer } = Layout;

import Grid from '../grid';
const { Row, Col } = Grid;

storiesOf('Layout', module)
  .addParameters({ component: Layout })
  .add('Default', () => (
    <Layout style={{ backgroundColor: `rgba(0, 0, 0, 0.25)` }}>
      <Header style={{ backgroundColor: `rgba(0, 0, 0, 0.25)` }}>
        <Row
          style={{ backgroundColor: `rgba(125, 0, 0, 0.2)` }}
          align="stretch"
        >
          <Col style={{ backgroundColor: `rgba(0, 0, 125, 0.2)` }} span={6}>
            <Text>Logo</Text>
          </Col>
          <Col
            style={{ backgroundColor: `rgba(0, 0, 125, 0.2)` }}
            span={18}
            align="end"
          >
            <Text>Menu</Text>
          </Col>
        </Row>
      </Header>
      <Main>
        <Text>This is a Main component</Text>
      </Main>
      <Footer style={{ backgroundColor: `rgba(0, 0, 0, 0.25)` }}>
        <Text>This is a Footer component</Text>
      </Footer>
    </Layout>
  ));
