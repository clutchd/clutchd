import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../typography';
const { Text } = Typography;

import App from '../app';
const { Header, Content, Footer } = App;

import Grid from '../grid';
const { Row, Col } = Grid;

storiesOf('App', module)
  .addParameters({ component: App })
  .add('Default', () => (
    <App>
      <Header>
        <Text>This is a Header component</Text>
      </Header>
      <Content>
        <Text>This is a Content component</Text>
      </Content>
      <Footer>
        <Text>This is a Footer component</Text>
      </Footer>
    </App>
  ));
