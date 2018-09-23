import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Fight from './components/Fight'
import SelectionPanel from './components/SelectionPanel'


class App extends Component {

  constructor () {
    super();

    this.state = {
      option1: null,
      option2: null
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

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {
          this.state.option1 && this.state.option2 ?
            <Fight option1={this.state.option1} option2={this.state.option2} />
          :
            <SelectionPanel creatureSelected={this.creatureSelected} />
        }
      </React.Fragment>
    );
  }
}

export default App;
