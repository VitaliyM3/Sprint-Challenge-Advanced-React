import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from "./nav-bar"

class App extends React.Component {
  constructor() {
    super();
    this.state={
      players: []
    }
  };

  componentDidMount() {

    axios.get(`http://localhost:5000/api/players`)
    .then(res => this.setState({ players: res.data }))
    
    .catch(error => console.log("error missing info", error));
  };

  render() {
    return(
      <div className="main-container">
      <Navbar></Navbar>
      <div className="players" >
        {this.state.players.map(item => {
          return <div className="player-card" >
            <h2> {item.name} </h2>
            <h3> {item.country} </h3>
            <h3> Searches: {item.searches} </h3>
            <h4> ID: {item.id} </h4>
          </div>
        })}
      </div>
      </div>
    )
  };

};

export default App;
