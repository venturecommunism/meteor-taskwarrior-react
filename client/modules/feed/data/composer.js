export default ({context, query, recordcount, taskids, single = false}, onData) => {
  const {Meteor, Collections} = context()

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
    if (single) {
      //sweetAlert("single", "true")
      const initialdata = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
      const data = initialdata[0] ? initialdata[0] : {}
      onData(null, {data})
    } else {
      //sweetAlert("single", "false")
      const data = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
      onData(null, {data})
    }
  }
}
