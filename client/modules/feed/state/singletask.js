import FeedDomain from '../actions/feed_domain'

export default (context, actions) => ({
  single: true,
  query: { _id: FlowRouter.current().queryParams.projects },
  recordcount: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

