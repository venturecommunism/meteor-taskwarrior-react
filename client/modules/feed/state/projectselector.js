import FeedDomain from '../actions/feed_domain'

export default (context, actions) => ({
  project: alert(FlowRouter.current().queryParams.projects),
  query: { _id: project },
  recordcount: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  buttonpress: actions.feed_actions.settle,
  context: () => context,
})

