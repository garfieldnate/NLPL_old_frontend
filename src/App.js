import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextWindow from './text_window.js'
import VocabPanel from './vocab_panel.js'

var VOCABS = [
  {lemma: 'gehen', POS: 'V'},
  {lemma: 'sehen', POS: 'V'},
  {lemma: 'der Tische', POS: 'N'},
  {lemma: 'schwartz', POS: 'A'},
];

var TEXT = {
  text: "Ich bin geschlafe",
  tokens: [
    {start:0,end:2,lemma:"ich"},
    {start:4,end:6,lemma:"sein"},
    {start:8,end:16,lemma:"schlafen"}
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextWindow text={TEXT}/>
        <hr />
        <VocabPanel vocabs={VOCABS} />
      </div>);
  }
}

export default App;
