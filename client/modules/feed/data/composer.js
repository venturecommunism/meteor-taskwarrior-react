import FeedDomain from '../actions/feed_domain'

export default ({context, feedquery}, onData) => {
  const {Meteor, Collections} = context();
  var query = feedquery().feedquery
  //sweetAlert("query", JSON.stringify(query))
  var projquery = feedquery().projectsquery
  var filtprojquery = feedquery().filtprojquery
  //sweetAlert("projquery", Object.keys(projquery))

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
    const collection = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
    //sweetAlert("collection results", collection)
    const projects = Collections.tasks.find(projquery).fetch()
    const filterprojects = Collections.tasks.find(filtprojquery).fetch()
    //sweetAlert('collection', Object.keys(collection[0]))
    //sweetAlert('projects', Object.keys(projects[0]))
    onData(null, {collection, projects, filterprojects});
  }
}
