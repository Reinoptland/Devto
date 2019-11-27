import React, { Component } from "react";
import { connect } from "react-redux";

class Developers extends Component {
  render() {
    return (
      <div>
        {this.props.developers.map(developer => {
          return (
            <div key={developer.id}>
              <h1>{developer.name}</h1>
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
