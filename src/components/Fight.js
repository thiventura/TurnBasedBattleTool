import React, { Component } from 'react';
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

  render() {
    return (
      <div>
        <Card 
          name={this.state.player1.name} 
          image={this.state.player1.image}
          life={this.state.player1.life}
          energy={this.state.player1.energy}
          walk={this.state.player1.walk}
          moves={this.state.player1.moves} />

        <Card 
          name={this.state.player2.name} 
          image={this.state.player2.image}
          life={this.state.player2.life}
          energy={this.state.player2.energy}
          walk={this.state.player2.walk}
          moves={this.state.player2.moves} />
      </div>
    );
  }
}

export default Fight;
