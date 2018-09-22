import React, { Component } from 'react';
import './App.css';

import fire from './fire'

class App extends Component {

  constructor () {
    super();
    this.state = {
      image: ""
    };
  }

  componentWillMount() {
    this.getImage();
  }

  getImage = () => {
    var database = fire.database();
  
    database.ref('/pokemons/Charmander').once('value')
      .then((snapshot) => {
        var imageCharmander = (snapshot.val() && snapshot.val().imagem) || 'https://i.ytimg.com/vi/NiEABxi8G4U/maxresdefault.jpg';
        console.log(imageCharmander);
        this.setState ({
          image: imageCharmander
        });
    });

  }

  render() {

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} alt="test" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To Poke started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
