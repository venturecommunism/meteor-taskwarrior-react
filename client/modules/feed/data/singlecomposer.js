export default ({context, query, recordcount, taskids}, onData) => {
  const {Meteor, Collections} = context();

  var queryParams = FlowRouter.current().queryParams
  var project = queryParams.projects
  if (project) {
    var query = { _id: project }
  } else {
    // TODO: find a better way to return no data instead of using a bad query
    var query = { crazyquery: {$exists: 1} }
  }

  const fields = {
    tasks: {
      _id: true,
      description: true,
      uuid: true,
      status: true,
      entry: true,
      likecount: true,
      taskcommentcount: true,
      username: true,
      created: true,
      owner: true,
      type: true,
      workflow: true,
      project: true,
      super: true,
    },
    taskComments: {
      _id: true,
      created: true,
      username: true,
      description: true,
      task: true,
    }
  }

  if (Meteor.subscribe('feed', fields, recordcount, taskids).ready()) {
    const initialdata = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
    //sweetAlert("data results", JSON.stringify(data))
    const data = initialdata[0] ? initialdata[0] : {}
    //sweetAlert("task", Object.keys(task))
    onData(null, {data})
  }
}
