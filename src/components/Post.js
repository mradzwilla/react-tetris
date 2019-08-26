import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div>{this.props.name} said {this.props.status}</div>
    );
  }
}

export default Post;
