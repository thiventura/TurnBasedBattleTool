import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import fire from './fire'
import Fight from './components/Fight'
import Selection from './components/Selection'


class App extends Component {

  constructor () {
    super();

    this.state = {
      option1: null,
      option2: null
    };
  }

  componentWillMount() {
    this.loadPlayer ("Charmander").then( creature => {
      creature.name = "Charmander";
      this.setState({
        option1: creature
      });
    });

    this.loadPlayer ("Bulbasaur").then( creature => {
      creature.name = "Bulbasaur";
      this.setState({
        option2: creature
      });
    });
  }

  loadPlayer = async name => {
    const snapshot = await fire.database()
      .ref('/creatures/' + name)
      .once('value');
  
    return snapshot ? snapshot.val() : null;
  }

  creatureSelected = (player, creature) => {
    console.log(player);
    console.log(creature);
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Selection player="1" creatureSelected={this.creatureSelected} />
        {
          this.state.option1 && this.state.option2 ?
            <Fight option1={this.state.option1} option2={this.state.option2} />
            :
            <div></div>}
      </React.Fragment>
    );
  }
}

export default App;
