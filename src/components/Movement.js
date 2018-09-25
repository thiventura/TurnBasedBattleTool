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
      playerEnergy: props.playerEnergy,
      doAttack: props.doAttack
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      playerEnergy: nextProps.playerEnergy
    });
  }

  handleClickMove = move => {
    this.state.doAttack (move);
  }

  render() {
    return (
      <Grid item xs={6}>

        <Button 
          variant="outlined" 
          color="secondary" 
          fullWidth={true}
          disabled={this.state.playerEnergy < this.state.move.energy}
          onClick={ e => {this.handleClickMove(this.state.move)}} 
          type='submit'>

          <div >
            <h3>
              {this.state.move.name}
            </h3>

            <Badge badgeContent={this.state.move.damage} color="primary" style={styles.badge}>
              <WhatshotIcon fontSize="large" />
            </Badge>
            <Badge badgeContent={this.state.move.range} color="primary" style={styles.badge}>
              <ZoomOutMapIcon fontSize="large" />
            </Badge>
            <Badge badgeContent={this.state.move.energy} color="primary" style={styles.badge}>
              <Battery30Icon fontSize="large" />
            </Badge>
          </div>
          
        </Button>

      </Grid>
    );
  }
}

const styles = {
  button: {
    width: "45%"
  },
  div: {
    width: "50%"
  },
  badge: {
    margin: 10
  }
}

export default Movement;
