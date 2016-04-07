import FeedDomain from '../actions/feed_domain'

const projectselector = (context, actions) => ({
  project: FlowRouter.current().queryParams.projects,
  query: { _id: FlowRouter.current().queryParams.projects },
  recordcount: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  buttonpress: actions.feed_actions.settle,
  context: () => context,
})

export default projectselector
