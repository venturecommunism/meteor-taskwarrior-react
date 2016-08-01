export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

  function selector() {
    return { _id: FlowRouter.current().queryParams.projects }
  }

    return {
      name: 'projectselector',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: { taskspending: 1 },
    }
  },
  selector() {
    return { _id: FlowRouter.current().queryParams.projects }
  },
  project() {
    return FlowRouter.current().queryParams.projects
  },
  buttonpress({context}, e, id) {
    //sweetAlert("projectselector", e)
    //sweetAlert("id", id)
    var data = {workflow: "/tw-ui/3.projectselected"}
    Meteor.call('taskspending.update', data, id)
    
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

