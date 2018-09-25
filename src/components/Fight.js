import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';
import Card from './Card'

class Fight extends Component {

  constructor (props) {
    super(props);

    this.state = {
      player1: props.option1,
      player2: props.option2,
      gameOver: props.gameOver,
      turnPlayer1: Math.random() > 0.5
    };
  }

  setLife = (player, life) => {
    const playerUpdated = player === 1 ? this.state.player1 : this.state.player2;

    playerUpdated.life -= life;
    if (playerUpdated.life < 0) {
      this.gameOver( player === 1 ? 2 : 1 );
      return;
    }

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

    if (playerUpdated.energy < 0) {
      playerUpdated.energy = 0;
    }

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

  changeTurn = () => {
    this.setState({
      turnPlayer1: !this.state.turnPlayer1
    });
  }

  gameOver = winner => {
    this.state.gameOver (winner);
  }

  render() {
    return (
      <div>
        <Slide 
          direction="right" 
          in={this.state.turnPlayer1} 
          mountOnEnter 
          unmountOnExit
          style={{ transitionDelay: this.state.turnPlayer1 ? 500 : 0 }} >
          <Card 
            name={this.state.player1.name} 
            image={this.state.player1.image}
            life={this.state.player1.life}
            energy={this.state.player1.energy}
            walk={this.state.player1.walk}
            moves={this.state.player1.moves}
            player={1}
            setLife={this.setLife} 
            setEnergy={this.setEnergy}
            changeTurn={this.changeTurn} />
        </Slide>
        <Slide 
          direction="left" 
          in={!this.state.turnPlayer1} 
          mountOnEnter 
          unmountOnExit
          style={{ transitionDelay: this.state.turnPlayer1 ? 0 : 500 }} >
          <Card 
            name={this.state.player2.name} 
            image={this.state.player2.image}
            life={this.state.player2.life}
            energy={this.state.player2.energy}
            walk={this.state.player2.walk}
            moves={this.state.player2.moves}
            player={2}
            setLife={this.setLife} 
            setEnergy={this.setEnergy}
            changeTurn={this.changeTurn} />
        </Slide>
      </div>
      
    );
  }
}

export default Fight;
