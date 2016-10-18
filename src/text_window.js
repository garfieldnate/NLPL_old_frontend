import React, { Component } from 'react';
import Token from './token.js';

// will have text and token state
class TextWindow extends Component {
    render() {
      return <div>
        <Token text="some" />
        <Token text="text" />
      </div>;
    }
}

export default TextWindow;
