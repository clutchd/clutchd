import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Typography from '../typography';
const { Heading, Paragraph, Text } = Typography;

storiesOf('Typography', module)
  .addParameters({ component: Typography })
  .add('Default', () => (
    <div>
      <Typography>
        <Heading>Overview</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet,{' '}
          <Text strikethrough>consectetur adipiscing elit</Text>, sed do eiusmod
          tempor incididunt ut <Text code>labore et dolore</Text> magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text mark>cillum dolore eu</Text> fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat{' '}
          <Text underline>non proident</Text>, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Paragraph>
        <Text pre code>
          Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
        <Heading level={2}>Sub Topic</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet,{' '}
          <Text strikethrough>consectetur adipiscing elit</Text>, sed do eiusmod
          tempor incididunt ut <Text code>labore et dolore</Text> magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text mark>cillum dolore eu</Text> fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat{' '}
          <Text underline>non proident</Text>, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Paragraph>
      </Typography>
      <Typography>
        <Heading>Overview</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet,{' '}
          <Text strikethrough>consectetur adipiscing elit</Text>, sed do eiusmod
          tempor incididunt ut <Text code>labore et dolore</Text> magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text mark>cillum dolore eu</Text> fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat{' '}
          <Text underline>non proident</Text>, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Paragraph>
        <Text blockquote>
          Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
        <Heading level={2}>Sub Topic</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet,{' '}
          <Text strikethrough>consectetur adipiscing elit</Text>, sed do eiusmod
          tempor incididunt ut <Text code>labore et dolore</Text> magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text mark>cillum dolore eu</Text> fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat{' '}
          <Text underline>non proident</Text>, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Paragraph>
      </Typography>
    </div>
  ));

storiesOf('Typography.Heading', module)
  .addParameters({ component: Heading })
  .add('Default', () => (
    <div>
      <Heading level={1}>Hello World!</Heading>
      <Heading level={2}>Hello World!</Heading>
      <Heading level={3}>Hello World!</Heading>
      <Heading level={4}>Hello World!</Heading>
      <Heading level={5}>Hello World!</Heading>
      <Heading level={6}>Hello World!</Heading>
    </div>
  ));

storiesOf('Typography.Paragraph', module)
  .addParameters({ component: Paragraph })
  .add('Default', () => (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  ));

storiesOf('Typography.Text', module)
  .addParameters({ component: Text })
  .add('Default', () => (
    <Text>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ))
  .add('Code', () => (
    <Text pre code>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ))
  .add('Code Highlighting', () => (
    <Text pre code className="language-javascript">
      {`onSubmit(e) {
          e.preventDefault();
          const job = {
            title: 'Developer',
            company: 'Facebook' 
            };
          }`}
    </Text>
  ))
  .add('Disabled', () => (
    <Text disable>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ))
  .add('Mark', () => (
    <Text mark>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ))
  .add('Strikethrough', () => (
    <Text strikethrough>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ))
  .add('Strong', () => (
    <Text strong>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ))
  .add('Underlined', () => (
    <Text underline>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ));
