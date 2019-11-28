import React, { Component } from "react";
import { fetchDeveloper } from "../store/developerDetails/actions";
import { connect } from "react-redux";

class DeveloperDetails extends Component {
  componentDidMount() {
    // Get information about which we developer we want to see from
    // Router props
    // the match router prop
    // id is a parameter
    const id = this.props.match.params.id;
    this.props.dispatch(fetchDeveloper(id));
  }
  render() {
    if (this.props.developer === null) {
      return "Loading";
    }

    const { name, intro, github_username, website } = this.props.developer;
    return (
      <div>
        <h1>{name}</h1>
        <h5>Github: {github_username}</h5>
        <p>{intro}</p>
        <a href={website}>My webzone</a>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    developer: reduxState.developerDetails
  };
};

export default connect(mapStateToProps)(DeveloperDetails);
