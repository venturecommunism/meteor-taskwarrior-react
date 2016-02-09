import React from 'react'

const CommentItem = (props) => (
      <div className="comment-item">
        <div className="comment-item__photo"></div>

        <div className="comment-item__text">
          <span className="comment-item__name">
            { this.props.username }
          </span>

          <span className="comment-item__description">
            { this.props.description }
          </span>

          <div className="comment-item__date">
            { moment(this.props.created).fromNow() }
          </div>
        </div>
      </div>
    )
CommentItem.propTypes = {
  username: React.PropTypes.string,
  description: React.PropTypes.string,
  created: React.PropTypes.instanceOf(Date),
}

this.CommentItem = CommentItem;

export default CommentItem
