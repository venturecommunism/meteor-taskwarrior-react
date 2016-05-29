export default {
  query() {
    return {
      connection: null,
      collection: 'tasks',
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: { tasks: 1 },
    }
  },
  selector() {
    return { _id: FlowRouter.current().queryParams.projects }
  },
  project() {
    return FlowRouter.current().queryParams.projects
  },
  buttonpress({context}, e) {
    //sweetAlert("projectselector", e)
/*
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id
    const data = {"workflow.status": "context", "workflow.workflow": ["project", "context"]}
    Meteor.call('tasks.update', data, id)
*/
  },
  buttontext() {
    return 'Settle'
  },
}

