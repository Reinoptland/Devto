import React, { Component } from "react";
import { signUp } from "../store/auth/actions";
import { connect } from "react-redux";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    const nameOfInputField = event.target.name;
    const valueOfInputField = event.target.value;

    this.setState({ [nameOfInputField]: valueOfInputField });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, password } = this.state;

    const action = signUp(name, email, password);
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            name="email"
            placeholder="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect()(SignUp);
