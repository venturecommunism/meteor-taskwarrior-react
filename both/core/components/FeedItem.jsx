/*global FeedItemHeader, FeedItemFooter, FeedComments */

this.FeedItem = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired,
    comments: React.PropTypes.array.isRequired,
    uuid: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    entry: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <div className='feed-item'>
        <FeedItemHeader {...this.props} />

        <div className='feed-item-description'>
          {this.props.description}
        </div>

        <div className='feed-item-entry'>
          {this.props.entry}
        </div>

        <div className='feed-item-status'>
          {this.props.status}
        </div>

        <div className='feed-item-uuid'>
          {this.props.uuid}
        </div>

        <FeedItemFooter {...this.props} />

        <FeedComments {...this.props} />
      </div>
    );
  }
});
