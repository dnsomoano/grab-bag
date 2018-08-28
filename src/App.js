import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: [],
      displayedWord: []
    };
  }

  inputWord = event => {
    // let bucket = [];
    // for (let index = 0; index < bucket.length; index++) {
    //   const  = bucket[index];

    // }
    console.log(event.target.value);
    this.setState({
      word: event.target.value
    });
    // return this.state.word;
  };

  addWordToDOM = event => {
    const _newList = this.state.displayedWord;
    _newList.push(this.state.word);
    this.setState({
      displayedWord: _newList
    });
  };
  render() {
    return (
      <div className="App">
        <input placeholder="random string here" onInput={this.inputWord} />
        <button onClick={this.addWordToDOM}>Update List</button>
        <section className="displayed-list">
          {this.state.displayedWord.map((listedWord, i) => {
            return <div key={i}>{listedWord}</div>
          })}
        </section>
      </div>
    );
  }
}

export default App;
