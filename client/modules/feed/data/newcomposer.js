import FeedDomain from '../actions/feed_domain'

export default ({context, query, recordcount}, onData) => {
  const {Meteor, Collections} = context();

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

  const taskIds = FeedDomain.getTaskCommentIds()

  if (Meteor.subscribe('feed', fields, recordcount, taskIds).ready()) {
    const data = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
    onData(null, {data});
  }
}
