import React, { Component } from 'react';
import fire from './../fire'
import ButtonBase from '@material-ui/core/ButtonBase';

class Selection extends Component {

  constructor (props) {
    super(props);

    this.state = {
      player: props.player,
      creatureSelected: props.creatureSelected,
      creatures: null,
      selected: null
    };
  }

  componentWillMount() {
    this.loadCreatures().then( creatures => {
      this.setState({
        creatures: creatures
      });
    });
  }

  loadCreatures = async () => {
    const snapshot = await fire.database()
      .ref('/creatures')
      .once('value');
  
    return snapshot ? snapshot.val() : null;
  }

  handleSelection = creature => {
    this.setState({
      selected: creature
    });

    this.state.creatureSelected (this.state.player, creature);
  }

  render() {
    return (
      <div>
        {
          this.state.creatures ? 

            this.state.selected ? 

              <img src={this.state.selected.image} alt={this.state.selected} />

            :

              Object.keys(this.state.creatures).map(creature => (
                <ButtonBase
                  onClick={ e => {this.handleSelection(this.state.creatures[creature])}}
                  type='submit'
                  focusRipple
                  key={creature}
                >
                  <img src={this.state.creatures[creature].image} alt={creature} />
                </ButtonBase>
              ))
              
          :
            <div></div>
        }
      </div>
    );
  }
}

export default Selection;
