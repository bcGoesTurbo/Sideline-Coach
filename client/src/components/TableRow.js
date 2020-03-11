import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      clicks: 0,
      show: true,
      totalClicks: 0
      };
  }
  delete() {
    axios.get('http://localhost:3000/player/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}



IncrementItem = () => {
  this.setState({ clicks: this.state.clicks + 1 });
}
DecreaseItem = () => {
  this.setState({ clicks: this.state.clicks - 1 });
}
ToggleClick = () => {
  this.setState({ show: !this.state.show });
}

TotalPoints = () => {
  this.setState({totalClicks: this.state.clicks});
// }
}
  render() {
    return (
      
      <tr >
        
        <td>{this.props.obj.player_name}</td>
        <td>{this.props.obj.player_number}</td>
        {/* <td>{this.props.obj.team_name}</td> */}
        {/* <td>{this.props.obj.teamID}</td> */}
        <td>{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</td>
        <td><button onClick={this.IncrementItem} class="btn btn-dark">+</button></td>
        <td><button onClick={this.DecreaseItem} class="btn btn-dark">-</button></td>
        
        {/* Edit button disabled for now */}
        {/* <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary btn-sm"> Edit </Link>
        </td> */}
        <td>
            <button onClick={this.delete} className="btn btn-sm">❌</button>
          </td>
      </tr>
    );
  }
}

export default TableRow;

