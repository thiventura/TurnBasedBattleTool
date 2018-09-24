import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Card'

class Fight extends Component {

  constructor (props) {
    super(props);

    const coin = Math.random() > 0.5;

    this.state = {
      player1: coin ? props.option1 : props.option2,
      player2: coin ? props.option2 : props.option1
    };
  }

  setLife = (player, life) => {
    const playerUpdated = player === 1 ? this.state.player1 : this.state.player2;

    playerUpdated.life -= life;
    if (playerUpdated.life < 0) 
      playerUpdated.life = 0;

    if (player === 1) {
      this.setState({
        player1: playerUpdated
      });
    } else {
      this.setState({
        player2: playerUpdated
      });
    }
  }

  setEnergy = (player, energy) => {
    const playerUpdated = player === 1 ? this.state.player1 : this.state.player2;
    playerUpdated.energy -= energy;

    if (playerUpdated.energy < 0) 
      playerUpdated.energy = 0;

    if (playerUpdated.energy > playerUpdated.maxEnergy) 
      playerUpdated.energy = playerUpdated.maxEnergy;

    if (player === 1) {
      this.setState({
        player1: playerUpdated
      });
    } else {
      this.setState({
        player2: playerUpdated
      });
    }
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Card 
          name={this.state.player1.name} 
          image={this.state.player1.image}
          life={this.state.player1.life}
          energy={this.state.player1.energy}
          walk={this.state.player1.walk}
          moves={this.state.player1.moves}
          player={1}
          setLife={this.setLife} 
          setEnergy={this.setEnergy}/>

        <Card 
          name={this.state.player2.name} 
          image={this.state.player2.image}
          life={this.state.player2.life}
          energy={this.state.player2.energy}
          walk={this.state.player2.walk}
          moves={this.state.player2.moves}
          player={2}
          setLife={this.setLife} 
          setEnergy={this.setEnergy}/>
      </Grid>
    );
  }
}

export default Fight;
