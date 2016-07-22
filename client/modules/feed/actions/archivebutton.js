export default {
  buttontext() {
    return "Archive"
  },
  buttonpress({context}, e, id) {
    Meteor.call('taskspending.pushtags', "archive", id)
    Meteor.call('taskspending.update', {status: "completed"}, id)
    Meteor.call('tasksbacklog.transfer', id)
  },
}

