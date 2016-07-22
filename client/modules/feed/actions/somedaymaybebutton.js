export default {
  buttontext() {
    return "Someday / Maybe"
  },
  buttonpress({context}, e, id) {
    Meteor.call('taskspending.update', {status: "somedaymaybe"}, id)
  },
}

