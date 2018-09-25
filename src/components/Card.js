import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Movements from './Movements';


class Card extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: props.name,
      image: props.image,
      life: props.life,
      energy: props.energy,
      walk: props.walk,
      moves: props.moves,
      player: props.player,
      setLife: props.setLife,
      setEnergy: props.setEnergy,
      changeTurn: props.changeTurn 
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      life: nextProps.life,
      energy: nextProps.energy
    });
  }

  attacked = (move, hit) => {
    this.state.setEnergy (this.state.player, move.energy);

    if (hit) {
      if (this.state.player === 1) {
        this.state.setLife (2, move.damage);
      } else {
        this.state.setLife (1, move.damage);
      }
    }

    // new turn, +1 enemy energy 
    if (this.state.player === 1) {
      this.state.setEnergy (2, -1);
    } else {
      this.state.setEnergy (1, -1);
    }

    this.state.changeTurn();
  }

  render() {
    return (

      <Paper style={styles.root} elevation={1}>

        <Grid container spacing={24}>

          <Grid item xs={5}>
            <div style={styles.image}>
              <img src={this.state.image} alt={this.state.name}/>
            </div>

            <Paper style={styles.info} elevation={2}>
              <Grid container spacing={24} >
                <Grid item xs={4}>
                  <Badge badgeContent={this.state.life} color="primary">
                    <FavoriteIcon fontSize="large" />
                  </Badge>
                </Grid>
                <Grid item xs={4}>
                  <Badge badgeContent={this.state.energy} color="primary">
                    <BatteryChargingFullIcon fontSize="large" />
                  </Badge>
                </Grid>
                <Grid item xs={4}>
                  <Badge badgeContent={this.state.walk} color="primary">
                    <ArrowForwardIcon fontSize="large" />
                  </Badge>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={7}>
            <Movements moves={this.state.moves} playerEnergy={this.state.energy} attacked={this.attacked} />
          </Grid>

        </Grid>
      </Paper>
    );
  }
}

const styles = {
  root: {
    padding: 30,
    paddingTop: 10,
    margin: 30
  },
  info: {
    padding: 15,
    margin: 10,
    textAlign: 'center'
  },
  image: {
    textAlign: 'center'
  }
};

export default Card;
