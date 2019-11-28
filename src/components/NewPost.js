import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createPost } from "../store/posts/actions";

class NewPost extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const { title, content } = this.state;
    const action = createPost(title, content);
    this.props.dispatch(action);
  };
  render() {
    if (this.props.jwt === null) {
      return <Link to="/signup">Please sign up to share your rants</Link>;
    }

    console.log(this.state);
    return (
      <div>
        <h1>Write something smart</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="title"
          />
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="something profound here"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    jwt: reduxState.auth.jwt
  };
};

export default connect(mapStateToProps)(NewPost);
