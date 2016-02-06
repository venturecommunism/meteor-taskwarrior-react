/*global User, PostActions */
/* jshint maxlen: false */


this.FeedItemHeader = React.createClass({
  mixins: [TimeFormatMixins],
  propTypes: {
    username: React.PropTypes.string,
    owner: React.PropTypes.string,
    destroyPost: React.PropTypes.func,
    created: React.PropTypes.instanceOf(Date),
  },

  formatDate() {
    var date = this.props.created;
    return date && this.fromNow(date);
  },

  handleClick() {
    PostActions.deletePost(this.props._id);
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
              Delete Post
          </div>
        }
      </div>
    );
  }
});
