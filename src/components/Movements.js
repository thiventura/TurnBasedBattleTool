import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Movement from './Movement';

class Movements extends Component {

  constructor (props) {
    super(props);

    this.state = {
      moves: props.moves
    }
  }

  render() {
    return (
      <Grid container spacing={24}>
        {
          Object.keys(this.state.moves).map(key => 
            <Movement move={this.state.moves[key]} />
          )}
      </Grid>
    );
  }
}

export default Movements;
