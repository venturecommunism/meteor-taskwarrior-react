/* jshint maxlen: false */

import React from 'react'

const FeedItemFooter = ({task}) => (

      <div className="feed-item__footer">
{/*        {!this.state.hasLiked &&
          <a href="#" onClick={ this.handleLikeClick }>Like</a>
        }
*/}
        <span className='by-people'>
{/*          Liked by {this.props.likecount} people */}
        </span>

        <span className='by-people'>
{/*          {this.props.taskcommentcount} TaskComments */}
        </span>
      </div>


)

export default FeedItemFooter

/*
import React from 'react'

this.FeedItemFooter = React.createClass({
  propTypes: {
    likecount: React.PropTypes.number,
    taskcommentcount: React.PropTypes.number,
  },

  getInitialState() {
    return {
      hasLiked: false
    };
  },

  // *note* doesn't check for mult. likes by same person on the backend
  handleLikeClick(e) {
    e.preventDefault();
    if (User.loggedOut()) {
      ErrorActions.needLogin();
    }
    TaskActions.likeTask(this.props._id);
    this.setState({hasLiked: true});
  },

  render() {
    return (
      <div className="feed-item__footer">
        {!this.state.hasLiked &&
          <a href="#" onClick={ this.handleLikeClick }>Like</a>
        }

        <span className='by-people'>
          Liked by {this.props.likecount} people
        </span>

        <span className='by-people'>
          {this.props.taskcommentcount} TaskComments
        </span>
      </div>
    );
  }
});

*/
