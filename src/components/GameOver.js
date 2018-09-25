import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class GameOver extends Component {

  constructor (props) {
    super(props);
    this.state = {
      creature: props.winner
    };
  }

  render() {
    return (
      <div style={styles.root}>
        <img src={this.state.creature.image} alt={this.state.creature.name} />
        <Typography variant="display3" gutterBottom>
          {this.state.creature.name} is the winner!
        </Typography>
      </div>   
    );
  }
}

const styles = {
  root: {
    textAlign: "center"
  }
};

export default GameOver;
