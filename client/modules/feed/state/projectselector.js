import FeedDomain from '../actions/feed_domain'

const projectselector = (context, actions) => ({
  collection: 'tasks',
  project: FlowRouter.current().queryParams.projects,
  query: { _id: FlowRouter.current().queryParams.projects },
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  buttonpress: actions.feed_actions.settle,
  context: () => context,
})

export default projectselector
