import React, { Component } from 'react';
import Token from './token.js';
import './Token.css';

// will have text and token state
class TextWindow extends Component {
  constructor(props){
    super(props);
    this.getTextChildren = this.getTextChildren.bind(this);
  }
  render() {
    var textChildren = this.getTextChildren(this.props.text);
    return <div>
      {textChildren}
    </div>;
  }
  getTextChildren(textData){
    var children = []
    var text = textData.text;
    var tokens = textData.tokens;
    var ind = 0;
    for (let token of tokens){
      if(token.start > ind){
        children.push(<span key={ind}>{textRange(text, ind, token.start - 1)}</span>);
      }
      children.push(<Token text={textRange(text, token.start, token.end)} className="token" key={token.start}/>);
      ind = token.end + 1;
    }
    return children;
  }
}

function textRange(text, start, end) {
  return text.substr(start, end - start + 1);
}

export default TextWindow;
