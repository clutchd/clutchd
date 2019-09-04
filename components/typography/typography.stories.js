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
          <Text mark>Ut enim ad</Text> minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text emphasis>cillum dolore eu</Text> fugiat
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
          tempor incididunt ut{' '}
          <Text code className="language-javascript">
            {`class TodoApp extends React.Component {`}
          </Text>{' '}
          magna aliqua.
          <Text mark>Ut enim ad</Text> minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text emphasis>cillum dolore eu</Text> fugiat
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
          <Text mark>Ut enim ad</Text> minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text emphasis>cillum dolore eu</Text> fugiat
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
          tempor incididunt ut{' '}
          <Text code className="language-javascript">
            {`class TodoApp extends React.Component {`}
          </Text>{' '}
          magna aliqua.
          <Text mark>Ut enim ad</Text> minim veniam, quis nostrud exercitation
          <Text disable> ullamco laboris nisi</Text> ut aliquip ex ea commodo
          consequat. <Text strong>Duis aute irure</Text> dolor in reprehenderit
          in voluptate velit esse <Text emphasis>cillum dolore eu</Text> fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat{' '}
          <Text underline>non proident</Text>, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Paragraph>
        <Text pre code className="language-javascript">
          {`onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook' 
  };
}`}
        </Text>
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
  .add('Inline Code', () => (
    <div>
      <Text code>
        Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <br />
      <Text code className="language-javascript">
        {`class TodoApp extends React.Component {`}
      </Text>
    </div>
  ))
  .add('Preformatted Code', () => (
    <div>
      <Text pre code>
        Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text pre code className="language-javascript">
        {`class TodoApp extends React.Component {`}
      </Text>
    </div>
  ))
  .add('Code Highlighting', () => (
    <Text pre code className="language-javascript">
      {`class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);`}
    </Text>
  ))
  .add('Disabled', () => (
    <Text disable>
      Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  ))
  .add('Emphasis', () => (
    <Text emphasis>
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
