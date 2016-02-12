/*global PostActions */

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
