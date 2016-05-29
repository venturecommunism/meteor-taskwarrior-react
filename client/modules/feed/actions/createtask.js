export default {
  query() {
    return {
      connection: null,
      collection: 'tasksbacklog',
      pubsort: {due: -1},
      subsort: {due: 1},
      limit: { tasksbacklog: 5 },
    }
  },
  selector() {
    return {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}
  },
  create({Meteor, LocalState, FlowRouter}, description) {
    if (!description) {
      return LocalState.set('SAVING_ERROR', 'Description required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const _id = Meteor.uuid();
    const data = {}
    data.workflow = {status: "inbox"}
    data.description = description
    data.uuid = guid()
    data.created = new Date();
    var date = moment(data.created)
    data.entry = formattedMoment(date)
    data.status = 'pending'
    //sweetAlert("username", Object.keys(Meteor.user().emails[0]))
    //sweetAlert("username", Meteor.user().emails[0].address)
    data.username = Meteor.user() ? Meteor.user().emails[0].address : 'Anonymous'
    //sweetAlert("data", data)

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
  errortype() {
    return 'SAVING_ERROR'
  },
}

