import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Movement from './Movement';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

class Movements extends Component {

  constructor (props) {
    super(props);

    this.state = {
      moves: props.moves,
      playerEnergy: props.playerEnergy,
      openDialog: false,
      attacked: props.attacked,
      move: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      playerEnergy: nextProps.playerEnergy
    });
  }

  doAttack = (move) => {
    this.setState({
      openDialog: true,
      move
    });
  }

  handleYes = () => {
    this.state.attacked (this.state.move, true);
    this.setState({
      openDialog: false
    });
  };

  handleNo = () => {
    this.state.attacked (this.state.move, false);
    this.setState({
      openDialog: false
    });
  };

  handleCancel = () => {
    this.setState({
      openDialog: false
    });
  };

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          {
            Object.keys(this.state.moves).map(key => 
              <Movement 
                move={this.state.moves[key]} 
                playerEnergy={this.state.playerEnergy} 
                doAttack={this.doAttack} 
                key={key} />
            )}
        </Grid>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          maxWidth="xs"
          open={this.state.openDialog}>
          <DialogTitle id="confirmation-dialog-title">O inimigo está no alcance?</DialogTitle>
          <DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleYes} color="primary">
              Sim
            </Button>
            <Button onClick={this.handleNo} color="primary">
              Não
            </Button>
            <Button onClick={this.handleCancel} color="primary">
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Movements;
