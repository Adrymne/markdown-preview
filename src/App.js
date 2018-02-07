import React from 'react';
import Input from './app/Input';
import Output from './app/Output';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  handleInput = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <div id="container">
        <Input value={text} onChange={this.handleInput} />
        <Output />
      </div>
    );
  }
}

export default App;
