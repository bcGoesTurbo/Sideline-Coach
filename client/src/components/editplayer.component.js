import React, { Component } from 'react';
import axios from 'axios';

export default class EditPlayer extends Component {
  constructor(props) {
    super(props);
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerNumber = this.onChangePlayerNumber.bind(this);
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

  componentDidMount() {
      axios.get('http://localhost:3000/player/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                playername: response.data.playername, 
                playernumber: response.data.playernumber,
                team: response.data.team });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangePlayerName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangePlayerNumber(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeTeam(e) {
    this.setState({
      business_gst_number: e.target.value
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
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}