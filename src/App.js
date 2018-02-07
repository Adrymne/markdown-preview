import React from 'react';
import SourceLink from './app/SourceLink';
import Input from './app/Input';
import Output from './app/Output';
import marked from 'marked';
import './App.css';

const parseMarkdown = text => marked(text, { gfm: true, sanitize: true });

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  handleInput = event => {
    this.setState({
      text: event.target.value,
      html: parseMarkdown(event.target.value)
    });
  };

  render() {
    const { text, html } = this.state;
    return (
      <React.Fragment>
        <div id="source-url">
          <SourceLink id="source-url" />
        </div>
        <span id="container">
          <Input value={text} onChange={this.handleInput} />
          <Output html={html} />
        </span>
      </React.Fragment>
    );
  }
}

export default App;
