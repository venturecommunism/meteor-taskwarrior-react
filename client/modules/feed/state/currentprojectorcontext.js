import FeedDomain from '../actions/feed_domain'

export default (context, actions) => ({
  query: FlowRouter.current().queryParams.projects ? { _id: FlowRouter.current().queryParams.projects } : { crazyquery: {$exists: 1 }},
  recordcount: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  //TODO: use a new composer/container to remove query, recordcount and taskids since no query is necessary
  context: () => context,
})

