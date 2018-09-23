import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Selection from './Selection'

class SelectionPanel extends Component {

  constructor (props) {
    super(props);

    this.state = {
      creatureSelected: props.creatureSelected
    };
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center">

        <Selection player="1" creatureSelected={this.state.creatureSelected} />
        <Selection player="2" creatureSelected={this.state.creatureSelected} />
        
      </Grid>
    );
  }
}

export default SelectionPanel;
