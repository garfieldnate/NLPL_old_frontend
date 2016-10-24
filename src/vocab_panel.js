import React, { Component } from 'react';

import './Vocab.css';

class Vocab extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
    // This line is important!
    this.togglePos = this.togglePos.bind(this);
  }

  render() {
    var cells = [];
    cells.push(<td key="name">{this.props.lemma}</td>);
    if(this.state.expanded){
        cells.push(<td key="POS">{this.props.POS}</td>);
    }
    return (
      <tr onClick={this.togglePos} className="vocab">
        {cells}
      </tr>
    );
  }

  togglePos(e) {
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
    console.log("hello?");
  }
}

class VocabPanel extends Component {
  render() {
    var rows = [];
    this.props.vocabs.forEach(function(vocab) {
      rows.push(<Vocab lemma={vocab.lemma} POS={vocab.POS} key={vocab.lemma + vocab.POS}/>);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Vocab</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default VocabPanel;