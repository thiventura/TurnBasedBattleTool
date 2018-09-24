import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Battery30Icon from '@material-ui/icons/Battery30';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Button from '@material-ui/core/Button';

class Movement extends Component {

  constructor (props) {
    super(props);

    this.state = {
      move: props.move,
      doAttack: props.doAttack
    }
  }

  handleClickMove = move => {
    this.state.doAttack (move);
  }

  render() {
    return (
      <Grid item xs={12}>

        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={ e => {this.handleClickMove(this.state.move)}} 
          type='submit'>

          {this.state.move.name}
          <Badge badgeContent={this.state.move.damage} color="primary">
            <WhatshotIcon fontSize="large" />
          </Badge>
          <Badge badgeContent={this.state.move.range} color="primary">
            <ZoomOutMapIcon fontSize="large" />
          </Badge>
          <Badge badgeContent={this.state.move.energy} color="primary">
            <Battery30Icon fontSize="large" />
          </Badge>

        </Button>

      </Grid>
    );
  }
}

export default Movement;
