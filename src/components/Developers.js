import React, { Component } from "react";
import { connect } from "react-redux";
import { approveDeveloper, fetchDevelopers } from "../store/developers/actions";
import { Link } from "react-router-dom";

class Developers extends Component {
  handleClick = id => {
    console.log("APPROVED");
    const action = approveDeveloper(id);
    console.log(action);
    this.props.dispatch(action);
  };

  componentDidMount() {
    const thunkAction = fetchDevelopers();
    console.log("What will this be?", thunkAction); // should be a function
    this.props.dispatch(thunkAction);
  }

  render() {
    if (this.props.loading) {
      return "Loading";
    }

    return (
      <div>
        {this.props.developers.map(developer => {
          return (
            <div key={developer.id}>
              <Link to={`/developers/${developer.id}`}>
                <h1>{developer.name}</h1>
              </Link>
              <button onClick={() => this.handleClick(developer.id)}>
                Would work with again
              </button>
              {developer.rockstarDeveloper ? <h2>Rockstar</h2> : <p>eh..</p>}
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
    developers: reduxState.developers,
    loading: reduxState.appState.loading
  };
};

export default connect(mapStateToProps)(Developers);
