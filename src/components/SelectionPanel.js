import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
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
      <div style={styles.root}>

        <Paper style={styles.paper} elevation={1}>
          <Selection player="1" creatureSelected={this.state.creatureSelected} />
        </Paper>

        <Paper style={styles.paper} elevation={1}>
          <Selection player="2" creatureSelected={this.state.creatureSelected} />
        </Paper>
        
      </div>
    );
  }
}

const styles = {
  root: {
    textAlign: "center"
  },
  paper: {
    padding: 10,
    margin: 20
  }
};

export default SelectionPanel;
