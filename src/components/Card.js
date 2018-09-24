import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Movements from './Movements';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



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
      <Grid container spacing={24}>

        <Grid item xs={5}>
          <h1>{this.state.name}</h1>
          <img src={this.state.image} alt={this.state.name}/>
        </Grid>


        <Grid item xs={7}>

          <Grid container spacing={24}>
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

            <Grid item xs={12}>
              <Movements moves={this.state.moves} />
            </Grid>
          </Grid>
          
        </Grid>

      </Grid>
    );
  }
}

export default Card;
