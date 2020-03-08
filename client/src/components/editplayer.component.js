import React, { Component } from 'react';
import axios from 'axios';

export default class EditPlayer extends Component {
  constructor(props) {
    super(props);
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerNumber = this.onChangePlayerNumber.bind(this);
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangeTeamID = this.onChangeTeamID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        player_name: '',
        player_number: '',
        team_name: '',
        teamID: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3000/player/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                player_name: response.data.player_name, 
                player_number: response.data.player_number,
                team_name: response.data.team_name, 
                teamID: response.data.teamID
              });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangePlayerName(e) {
    this.setState({
      player_name: e.target.value
    });
  }
  onChangePlayerNumber(e) {
    this.setState({
      player_number: e.target.value
    });  
  }
  onChangeTeam(e) {
    this.setState({
      team_name: e.target.value
    });
  }
  
  onChangeTeamID(e) {
    this.setState({
      teamID: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        player_name: this.state.playername,
        player_number: this.state.playernumber,
        team_name: this.state.team,
        teamID: this.state.teamID
    };
    axios.post('http://localhost:3001/player/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Player</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Player Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.player_name}
                      onChange={this.onChangePlayerName}
                      />
                </div>
                <div className="form-group">
                    <label>Player Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.player_number}
                      onChange={this.onChangePlayerNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Team Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.team_name}
                      onChange={this.onChangeTeam}
                      />
                </div>
                <div className="form-group">
                    <label>Home or Away Team: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.teamID}
                      onChange={this.onChangeTeamID}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Players" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}