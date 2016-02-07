/*global PostActions */

import React from 'react'

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange() {
    this.setState({
      description: this.refs.text.getDOMNode().value
    });
  }

  handleClick() {
    PostActions.createPost({ description: this.state.description, uuid: guid(), entry: formattedNow(), status: "pending" });
    this.resetForm();
  }

  resetForm() {
    this.setState({});
    $('textarea').val('');
  }

  render() {
    return (
      <div className='create-post'>
        <textarea
          ref='text'
          placeholder="Let us know what you think!"
          onChange={ this.handleChange.bind(this) } />

        <button onClick={ this.handleClick.bind(this) }>
          Submit Post
        </button>
      </div>
    );
  }
}

this.CreatePost = CreatePost;
