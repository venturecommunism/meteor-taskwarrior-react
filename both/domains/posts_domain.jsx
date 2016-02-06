/*global PostsDomain:true, User, Post */

PostsDomain = {
  handleCreatePost(data) {
    if (!data.description) return;

    Meteor.call('Post.create', {
      description: data.description,
      uuid: guid(),
      entry: formattedNow(),
      status: "pending",
      username: User.username()
    },
    this._handleServerError);
    console.log('[PostStore.handleCreatePost]', data);
  },

  handleDeletePost(docId) {
    Meteor.call('Post.destroy', docId);
  },

  handleLikePost(docId) {
    Meteor.call('Post.like', docId);
  },

  // TODO call error action and put in ErrorStore
  _handleServerError(err) {
    if (err && err.error === 401) {
      alert("You need to login before creating a post");
    } else if (err) {
      alert("Server error");
    }
  }
};
