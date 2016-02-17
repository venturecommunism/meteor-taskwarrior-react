TaskActions = {
  createTask(data) {
    // handle side effects here like analytics,
    // or gather data to pass to domain
    TasksDomain.handleCreateTask(data);
  },

  deleteTask(docId) {
    TasksDomain.handleDeleteTask(docId);
  },

  likeTask(docId) {
    TasksDomain.handleLikeTask(docId);
  }
};

