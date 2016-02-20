export default {

  // create
  add({Meteor, LocalState, FlowRouter}, data) {
    // console.log ('actions._tasks.add data', data);
    const _id = Meteor.uuid();
    Meteor.call('_tasks.add', data, _id, (err) => {
      if (err) {
        return LocalState.set('_tasks.SAVE_ERROR', err.message);
      }
    });
    FlowRouter.go(`/tasks/${_id}`);
  },

  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {
    // console.log ('actions._tasks.update _id', _id);
    // console.log ('actions._tasks.update data', data);

    Meteor.call('_tasks.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_tasks.SAVE_ERROR', err.message);
      }
    });
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log ('actions._tasks.update _id', _id);
    // console.log ('actions._tasks.update data', data);

    Meteor.call('_tasks.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_tasks.DELETE_ERROR', err.message);
      }
      FlowRouter.go(`/tasks/`);

    });
  },

  // clearError
  clearErrors({LocalState}) {
    LocalState.set('_tasks.DELETE_ERROR', null);
    return LocalState.set('_tasks.SAVE_ERROR', null);
  }

};
