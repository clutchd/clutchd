import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../typography';
const { Text } = Typography;

import Layout from '.';
const { Header, Content, Footer } = Layout;

import Grid from '../grid';
const { Row, Col } = Grid;

storiesOf('Layout', module)
  .addParameters({ component: Layout })
  .add('Default', () => (
    <Layout>
      <Header style={{ padding: `10px` }}>
        <Row align="stretch">
          <Col span={6}>
            <Text>Logo</Text>
          </Col>
          <Col span={18}>
            <Row align="stretch" justify="end">
              <Col span={6}>
                <Text>Menu</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Text>This is a Content component</Text>
      </Content>
      <Footer>
        <Text>This is a Footer component</Text>
      </Footer>
    </Layout>
  ));
