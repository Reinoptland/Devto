import React, { Component } from "react";

class DeveloperDetails extends Component {
  componentDidMount() {
    // Get information about which we developer we want to see from
    // Router props
    // the match router prop
    // id is a parameter
    console.log("ID", this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h1>DETAILS</h1>
      </div>
    );
  }
}

export default DeveloperDetails;
