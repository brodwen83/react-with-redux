import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { Header, Card } from "semantic-ui-react";

class Posts extends Component {
  componentWillMount = () => {
    this.props.fetchPosts();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(({ id, body, title }) => {
      return (
        // <div key={id} style={{ textAlign: "left", padding: 10 }}>
        //   <h3>{title}</h3>
        //   <p>{body}</p>
        // </div>
        <Card
          fluid
          color="grey"
          link
          header={title}
          meta="posts"
          description={body}
          key={id}
        />
      );
    });

    return (
      <div className="ui container">
        <Header
          as="h2"
          content="Posts"
          subheader="generating all the posts from api"
          style={{ marginTop: 20 }}
        />
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
