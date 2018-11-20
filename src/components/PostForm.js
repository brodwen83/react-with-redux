import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";
import { Form, Button, Header, Label } from "semantic-ui-react";

class PostForm extends Component {
  state = {
    data: {
      title: "",
      body: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Title should not be blank";
    else if (data.title.length < 1)
      errors.title =
        "Please provide a good title and should be 1 character long";
    if (!data.body) errors.body = "Body should not be blank";

    return errors;
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      // call action here
      this.props.createPost(this.state.data);
      this.setState({
        data: {
          title: "",
          body: ""
        }
      });
    }
  };

  onFocus = e => {
    this.setState({
      errors: { ...this.state.errors, [e.target.name]: "" }
    });
  };

  render() {
    const {
      data: { title, body },
      errors
    } = this.state;

    return (
      <div>
        <Header as="h2" content="Add Post" subheader="Add a vaidated post..." />
        <Form action="" onSubmit={this.onSubmit}>
          <Form.Field>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              onChange={this.onChange}
              name="title"
              value={title}
              onFocus={this.onFocus}
            />
            {errors.title && (
              <Label basic color="red" pointing>
                {errors.title}
              </Label>
            )}
          </Form.Field>

          <Form.Field>
            <label htmlFor="body">Body: </label>
            <textarea
              type="text"
              onChange={this.onChange}
              name="body"
              value={body}
              onFocus={this.onFocus}
            />
            {errors.body && (
              <Label basic color="red" pointing>
                {errors.body}
              </Label>
            )}
          </Form.Field>
          <Button content="Submit" primary />
        </Form>
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
