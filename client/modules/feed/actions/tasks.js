export default {
  create({Meteor, LocalState, FlowRouter}, description) {
    if (!description) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('tasks.create', id, description, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
//    FlowRouter.go(`/task/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};