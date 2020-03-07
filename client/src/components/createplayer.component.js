// createPlayer.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerNumber = this.onChangePlayerNumber.bind(this);
    // this.onChangeScore = this.onChangeScore.bind(this);
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      playername: '',
      playernumber: '',
      // score:'',
      team: '',
      // date:''
    }
  }
  onChangePlayerName(e) {
    this.setState({
      playername: e.target.value
    });
  }
  onChangePlayerNumber(e) {
    this.setState({
      playernumber: e.target.value
    })  
  }
  // onChangeScore(e) {
  //   this.setState({
  //     score: e.target.value
  //   })
  // }
  onChangeTeam(e) {
    this.setState({
      team: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      playername: this.state.playername,
      playernumber: this.state.playernumber,
      // score: this.state.score,
      team: this.state.team
    };
    axios.post('http://localhost:4000/players/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      playername: '',
      playernumber: '',
      // score: '',
      team: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Player</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Player Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.playername}
                      onChange={this.onChangePlayerName}
                      />
                </div>
                <div className="form-group">
                    <label>Player Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.playernumber}
                      onChange={this.onChangePlayerNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Team Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.team}
                      onChange={this.onChangeTeam}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Player" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}