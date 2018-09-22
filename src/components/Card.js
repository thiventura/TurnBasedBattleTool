import React, { Component } from 'react';

class Card extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: props.name,
      image: props.image,
      life: props.life,
      energy: props.energy,
      walk: props.walk,
      moves: props.moves
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.image} alt={this.state.name}/>

        <br/><br/>

        Vida: {this.state.life}
        <br/>

        Energia: {this.state.energy}
        <br/>

        Deslocamento: {this.state.walk}
        <br/>

        Movimentos:
        <br/>
        {
          Object.keys(this.state.moves).map(key => 
            <div key={key}>
              {this.state.moves[key].name}
              {this.state.moves[key].range}
              {this.state.moves[key].damage}
              {this.state.moves[key].energy}
              <br/>
            </div>
          )
        }
      </div>
    );
  }
}

export default Card;
