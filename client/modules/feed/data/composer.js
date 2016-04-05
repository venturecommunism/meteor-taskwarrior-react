export default ({context, query, recordcount, taskids}, onData) => {
  const {Meteor, Collections} = context();

  //sweetAlert("query", JSON.stringify(query))

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
    const data = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
    onData(null, {data});
  }
}
