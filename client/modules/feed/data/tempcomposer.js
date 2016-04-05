import FeedDomain from '../actions/feed_domain'

export default ({context, query}, onData) => {
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

  let recordCount = {tasks: 10000}

  //sweetAlert("query", query)	

  //sweetAlert("fields.tasks", Object.keys(fields.tasks))
  //sweetAlert("FeedDomain", Object.keys(FeedDomain))
  const feedtasks = FeedDomain.getAllFeedTasks()
  //sweetAlert("feedtasks", feedtasks)
  const taskIds = FeedDomain.getTaskCommentIds()
  //sweetAlert("taskIds", taskIds)
  //sweetAlert("subscription", Object.keys(Meteor.subscribe("feed", fields, recordCount, taskIds)))

  if (Meteor.subscribe('feed', fields, recordCount, taskIds).ready()) {
    const data = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
    //sweetAlert("data results", data)
    const projects = Collections.tasks.find(query).fetch()
    //sweetAlert('data', Object.keys(data[0]))
    //sweetAlert('projects', Object.keys(projects[0]))
    onData(null, {data, projects});
  }
}
