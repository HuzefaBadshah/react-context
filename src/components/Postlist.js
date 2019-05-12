import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersAndPosts } from "../actions";
import UserHeader from "./UserHeader";

class Postlist extends Component {
  componentDidMount() {
    this.props.fetchUsersAndPosts();
  }

  renderList = posts => {
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };
  render() {
    if (this.props.posts.length > 0) {
      console.log("Posts: ", this.props.posts);
      return (
        <div className="ui relaxed divided list">
          {this.renderList(this.props.posts)}
        </div>
      );
    } else {
      return <p>Loading Posts...</p>;
    }
  }
}
const mapStateToProps = ({ posts }) => {
  return { posts };
};
export default connect(
  mapStateToProps,
  { fetchUsersAndPosts }
)(Postlist);
