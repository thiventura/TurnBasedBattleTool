import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Battery30Icon from '@material-ui/icons/Battery30';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import WhatshotIcon from '@material-ui/icons/Whatshot';

class Movement extends Component {

  constructor (props) {
    super(props);

    this.state = {
      move: props.move
    }
  }

  render() {
    return (
      [
        <Grid item xs={6}>
          {this.state.move.name}
        </Grid>,
        <Grid item xs={2}>
          <Badge badgeContent={this.state.move.damage} color="primary">
            <WhatshotIcon fontSize="large" />
          </Badge>
        </Grid>,
        <Grid item xs={2}>
          <Badge badgeContent={this.state.move.range} color="primary">
            <ZoomOutMapIcon fontSize="large" />
          </Badge>
        </Grid>,
        <Grid item xs={2}>
          <Badge badgeContent={this.state.move.energy} color="primary">
            <Battery30Icon fontSize="large" />
          </Badge>
        </Grid>
      ]
    );
  }
}

export default Movement;
