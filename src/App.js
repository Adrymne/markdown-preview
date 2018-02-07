import React from 'react';
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
      <div id="container">
        <Input value={text} onChange={this.handleInput} />
        <Output html={html} />
      </div>
    );
  }
}

export default App;
