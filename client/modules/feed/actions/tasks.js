export default {
  create({Meteor, LocalState, FlowRouter}, description) {
    if (!description) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const _id = Meteor.uuid();
    const data = {description}
    sweetAlert("data", data)
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('tasks.create', data, _id, (err) => {
      if (err) {
        sweetAlert("Oops...", err.message, "error")
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    // FlowRouter.go(`/task/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
