/*global PostActions */

import React from 'react';

class CreatePost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button onClick={this.createPost.bind(this)}>Add New</button>
      </div>
    );
  }

  createPost() {
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default CreatePost;

/*

//import FeedDomain from '../actions/feed_domain.jsx'
import React from 'react'

const CreatePost = ({posts}) => (
  <div className='create-post'>
    <textarea
      placeholder="What's on your mind?" />

    <button>
      Submit Post
    </button>
  </div>
);

export default CreatePost

*/
