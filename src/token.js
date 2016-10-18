import React, { Component } from 'react';

class Token extends Component {
  render() {
    return <span className="token">
      {this.props.text}
    </span>;
  }
}

export default Token;
