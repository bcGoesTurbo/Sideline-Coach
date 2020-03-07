import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {player: []};
    }
    componentDidMount(){
      axios.get('http://localhost:3000/player')
        .then(response => {
          this.setState({ player: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.player.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Player List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Player Number</th>
                <th>Team</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }