import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Fight from './components/Fight'
import SelectionPanel from './components/SelectionPanel'
import GameOver from './components/GameOver'


class App extends Component {

  constructor () {
    super();

    this.state = {
      option1: null,
      option2: null,
      winner: null
    };
  }

  creatureSelected = (player, creature) => {
    if (player === "1") {
      this.setState({
        option1: creature
      });
    } else {
      this.setState({
        option2: creature
      });
    }
  }

  gameOver = winner => {
    const creature = winner === 1 ? this.state.option1 : this.state.option2;

    this.setState ({
      winner: creature
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {
          this.state.option1 && this.state.option2 ?
             this.state.winner ?
               <GameOver winner={this.state.winner} />
             :
               <Fight option1={this.state.option1} option2={this.state.option2} gameOver={this.gameOver} />
          :
            <SelectionPanel creatureSelected={this.creatureSelected} />
        }
      </React.Fragment>
    );
  }
}

export default App;
