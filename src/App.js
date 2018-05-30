import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

  // Every 1.5 seconds, it calls getBinsState to get new order of bins/trash
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

  // 9 times (for each bin) generate true or false for the isTrashVisible property
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = (index) => {
    console.log(`${this.state.bins[index].isTrashVisible}`);
    if (this.state.bins[index].isTrashVisible === true) {
      this.setState({ points: this.state.points + 1 });
    } else {
      this.setState({ points: this.state.points - 1 });
    }
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash
        key={`trash-${index}`}
        isTrashVisible={this.state.bins[index].isTrashVisible}
        clickCallback={ this.onTrashClicked }
        index={ index }
        />
      );
    });

    return (
      <div className="App">
      <section className="overall-data">
      <h1>Litter Patrol</h1>
      <h2>Points: { this.state.points }</h2>
      </section>

      <section className="bins">
      { bins }
      </section>
      </div>
    );
  }
}

export default App;
