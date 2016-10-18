import React, { Component } from 'react';

class VocabEntry extends Component {
  render() {
    return <p className="vocabEntry">{this.props.lemma}</p>;
  }
}

class VocabPanel extends Component {
  render() {
    return <div>
      <p>Vocab:</p>
      <VocabEntry lemma="to be" />
      <VocabEntry lemma="careful" />
      <VocabEntry lemma="foo" />
      <VocabEntry lemma="bar" />
    </div>;
  }
}

export default VocabPanel;