export default {
  buttontext() {
    return "Trash"
  },
  buttonpress({context}, e, id) {
    Meteor.call('taskspending.update', {status: "completed"}, id)
    Meteor.call('tasksbacklog.transfer', id)
  },
}

