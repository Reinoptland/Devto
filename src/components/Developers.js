import React, { Component } from "react";
import { connect } from "react-redux";
import { approveDeveloper } from "../store/developers/actions";

class Developers extends Component {
  handleClick = id => {
    console.log("APPROVED");
    const action = approveDeveloper(id);
    console.log(action);
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        {this.props.developers.map(developer => {
          return (
            <div key={developer.id}>
              <h1>{developer.name}</h1>
              <button onClick={() => this.handleClick(developer.id)}>
                Would work with again
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

// mapStateToProps
// function where we configure what parts of the state
// this component needs as props
// returns an object
// this object gets added to props of our component
const mapStateToProps = reduxState => {
  return {
    developers: reduxState.developers
  };
};

export default connect(mapStateToProps)(Developers);
