/* jshint maxlen: false */

import React from 'react'
import FeedDomain from '../actions/feed_domain.jsx'

const FeedItemHeader = ({task}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{task.username}</div>
{/*      <div className="date">{this.formatDate()}</div> */}
    </div>

    <div className='project-or-context'>
      {/* name has to be the same for buttons to toggle between them */}
      <input className={task._id} type="radio" name="setProjectOrContext" value="project" onChange={FeedDomain.setProjectOrContext} />&nbsp;Project&nbsp;
      <input className={task._id} type="radio" name="setProjectOrContext" value="context" onChange={FeedDomain.setProjectOrContext} />&nbsp;Context<br />
    </div>

{/*
    { hasDeleteBtn &&
      <div className="destroy" onClick={ this.handleClick }>
          Delete Task
      </div>
    }
*/}
  </div>
);

export default FeedItemHeader

{/*
import React from 'react'

this.FeedItemHeader = React.createClass({
  mixins: [TimeFormatMixins],
  propTypes: {
    username: React.PropTypes.string,
    owner: React.PropTypes.string,
    destroyTask: React.PropTypes.func,
    created: React.PropTypes.instanceOf(Date),
  },

  formatDate() {
    var date = this.props.created;
    return date && this.fromNow(date);
  },

  handleClick() {
    TaskActions.deleteTask(this.props._id);
  },

  render() {
    var hasDeleteBtn = this.props.owner === User.id();
    return (
      <div className="feed-item__header">
        <div className="avatar" />

        <div className='name-date'>
          <div className="name">{this.props.username}</div>
          <div className="date">{this.formatDate()}</div>
        </div>

        { hasDeleteBtn &&
          <div className="destroy" onClick={ this.handleClick }>
              Delete Task
          </div>
        }
      </div>
    );
  }
});
*/}
