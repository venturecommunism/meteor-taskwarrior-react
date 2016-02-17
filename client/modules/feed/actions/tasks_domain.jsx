TasksDomain = {
  handleCreateTask(data) {
    if (!data.description) return;

    Meteor.call('Task.create', {
      description: data.description,
      uuid: guid(),
      entry: formattedNow(),
      status: "pending",
      username: User.username()
    },
    this._handleServerError);
    console.log('[TaskStore.handleCreateTask]', data);
  },

  handleDeleteTask(docId) {
    Meteor.call('Task.destroy', docId);
  },

  handleLikeTask(docId) {
    Meteor.call('Task.like', docId);
  },

  // TODO call error action and put in ErrorStore
  _handleServerError(err) {
    if (err && err.error === 401) {
      alert("You need to login before creating a task");
    } else if (err) {
      alert("Server error");
    }
  }
};
