import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import 'bootstrap/scss/bootstrap.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = { player: [] };
    }
    componentDidMount(){
      axios.get('http://localhost:3000/player')
        .then(response => {
          this.setState({ player: response.data });
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.player.map(function(object, i){
        console.log("teamID test: " + object);
          return <TableRow obj={object} key={i} />;
      });
    }

    // conditional render function
    homeTeam(props) {

    }

    awayTeam(props) {

    }

  render() {
    return (
      <Container>
        <Row>
          <Column xs='6'>
            <h3 align="center">Home Team</h3>
            <h5 align="center">Red Dragons</h5> {/*Dynamically add Team Name here  */}
            <table className="table table-striped table-bordered table-sm" style={{ marginTop: 20 }}>
              <thead>
                 {/* Team Name - Sort only players on the same team */}
                 
                <tr>
                  <th>Player Name</th>
                  <th>Player Number</th>
                  <th>Team</th>
                  {/* <th>TeamID</th> */}
                  <th>Player Score</th>
                </tr>
              </thead>
              <tbody>{this.tabRow()}</tbody>
            </table>
          </Column>
          <Column xs='6'>
          <h3 align="center">Away Team</h3>
          <h5 align="center">Chicago Bulls</h5> {/*Dynamically add Team Name here  */}
          <table className="table table-striped table-bordered table-sm" style={{ marginTop: 20 }}>
            <thead>
              {/* Team Name - Sort only players on the same team */}
              <tr>
                <th>Player Name</th>
                <th>Player Number</th>
                <th>Team</th>
                {/* <th>TeamID</th> */}
                <th>Player Score</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
          </Column>
        </Row>
      </Container>
    );
  }
}
