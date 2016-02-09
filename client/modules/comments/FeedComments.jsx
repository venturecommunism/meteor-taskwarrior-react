/*global FeedComments, CommentItem, FeedActions, ErrorActions, User */
/* jshint maxlen: false */

import React from 'react'

class FeedComments extends React.Component {
  render() {
    return (
      <div className='feed-item__comments'>
        {
          this.props.comments.map(comment => {
            return <CommentItem key={comment._id} {...comment} />;
          })
        }
        <CreateComment post={this.props._id} />
      </div>
    );
  }
}

class CreateComment extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    if (User.loggedOut()) {
      ErrorActions.needLogin();
    }

    FeedActions.createComment({
      username: User.username(),
      description: e.target.firstChild.value,
      owner: User.id(),
      post: this.props.post,
    });

    e.target.reset();
  }

  render() {
    return (
      <form className='comment-form'
        onSubmit={ this.handleSubmit.bind(this) }>

        <input type='text'
          placeholder='Write a comment'
        />
      </form>
    );
  }
}
CreateComment.propTypes = {
  post: React.PropTypes.string.isRequired,
};

this.FeedComments = FeedComments;
