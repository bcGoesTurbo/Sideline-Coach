// createPlayer.component.js

import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";

class CreatePlayer extends Component {
  constructor(props) {
    super(props);

    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerNumber = this.onChangePlayerNumber.bind(this);
    // this.onChangeScore = this.onChangeScore.bind(this);
    // this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangeTeamID = this.onChangeTeamID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      player_name: "",
      player_number: "",
      // team_name: "",
      teamID: ""
    };
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
  // onChangeTeam(e) {
  //   this.setState({
  //     team_name: e.target.value
  //   });
  // }
  onChangeTeamID(e) {
    this.setState({
      teamID: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      player_name: this.state.player_name,
      player_number: this.state.player_number,
      // team_name: this.state.team_name,
      teamID: this.state.teamID
    };
    axios
      .post("http://localhost:3000/player/add", obj)
      .then(res => console.log(res.data));

    this.setState({
      player_name: "",
      player_number: "",
      // team_name: "",
      teamID: ""
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Column md={6}>
            <div style={{ marginTop: 10 }}>
              <h3 >Add New Player</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Player Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.player_name}
                    onChange={this.onChangePlayerName}
                  />
                </div>
                <div className="form-group ">
                  <label>Player Number: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.player_number}
                    onChange={this.onChangePlayerNumber}
                  />
                </div>
                {/* <div className="form-group">
                  <label>Team Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.team_name}
                    onChange={this.onChangeTeam}
                  />
                </div> */}
                <div className="form-group">
                  <label>Home or Away Team: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.teamID}
                    onChange={this.onChangeTeamID}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Player"
                    className="btn bg-dark text-white"
                  />
                </div>
              </form>
            </div>
          </Column>
          {/* {/* <Column md={6}>One of three columns</Column> */}
          <Column md={6}> </Column> 
        </Row>
      </Container>
    );
  }
}

export default CreatePlayer;
