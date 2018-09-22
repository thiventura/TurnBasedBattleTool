import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Battery30Icon from '@material-ui/icons/Battery30';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import WhatshotIcon from '@material-ui/icons/Whatshot';


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

        <Badge badgeContent={this.state.life} color="primary">
          <FavoriteIcon />
        </Badge>

        <Badge badgeContent={this.state.energy} color="primary">
          <BatteryChargingFullIcon />
        </Badge>

        <Badge badgeContent={this.state.walk} color="primary">
          <ArrowForwardIcon />
        </Badge>
        

        <br/>

        Movimentos:
        <br/>
        {
          Object.keys(this.state.moves).map(key => 
            <div key={key}>
              {this.state.moves[key].name}

              <Badge badgeContent={this.state.moves[key].damage} color="primary">
                <WhatshotIcon />
              </Badge>

              <Badge badgeContent={this.state.moves[key].range} color="primary">
                <ZoomOutMapIcon />
              </Badge>

              <Badge badgeContent={this.state.moves[key].energy} color="primary">
                <Battery30Icon />
              </Badge>
              
              <br/>
            </div>
          )
        }
      </div>
    );
  }
}

export default Card;
