import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    //call action here
    this.props.createPost(this.state);

    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h2>Add Post</h2>
        <form action="" onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input
              type="text"
              onChange={this.onChange}
              name="title"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <br />
            <textarea
              type="text"
              onChange={this.onChange}
              name="body"
              value={body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
