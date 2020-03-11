import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import "bootstrap/scss/bootstrap.scss";
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import Timer from "./Layouts/Timer"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: [],
      total: 0
      // homeTeam: []
      // awayTeam: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/player")
      .then(response => {
        this.setState({ player: response.data });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tabRowHome() {
    return this.state.player
      .filter(team => team.teamID === "Home")
      .map(function(object, i) {
        return <TableRow obj={object} key={i} />;
      });
  }

  tabRowAway() {
    return this.state.player
      .filter(team => team.teamID === "Away")
      .map(function(object, i) {
        return <TableRow obj={object} key={i} />;
      });
  }

  // totalPoints = () => {
  //   this.setState((prevState, props) => ({
  //     clicks: prevState.clicks + props.increment
      
  //   }));
  // }

  render() {
    return (
      <Container>
        <Row>
          <Column md="5">
            <tr>
            {/* {this.totalPoints()} */}
              <h3 align="center">Home Team</h3>
              
              <h5 align="center">Red Dragons</h5>{" "}
              {/*Dynamically add Team Name here  */}
            </tr>
            <table
              className="table table-striped table-bordered table-sm"
              style={{ marginTop: 20 }}
            >
              <thead>
                {/* Team Name - Sort only players on the same team */}

                <tr>
                  <th>Player Name</th>
                  <th>Player Number</th>
                  {/* <th>Team</th> */}
                  {/* <th>TeamID</th> */}
                  <th>Player Score</th>
                </tr>
              </thead>
              <tbody>{this.tabRowHome()}</tbody>
            </table>
          </Column>
          <Column md="2">

            <h1 align="center"> 0 : 0</h1>
            <br />
            <tr align="center"><Timer /></tr>

          </Column>
          <Column md="5">
            <h3 align="center">Away Team</h3>
            <h5  align="center">Chicago Bulls</h5>{" "}
            {/*Dynamically add Team Name here  */}
            <table
              className="table table-striped table-bordered table-sm "
              style={{ marginTop: 20 }}
            >
              <thead>
                {/* Team Name - Sort only players on the same team */}
                <tr>
                  <th>Player Name</th>
                  <th>Player Number</th>
                  {/* <th>Team</th> */}
                  {/* <th>TeamID</th> */}
                  <th>Player Score</th>
                </tr>
              </thead>
              <tbody>{this.tabRowAway()}</tbody>
            </table>
          </Column>
        </Row>
      </Container>
    );
  }
}
