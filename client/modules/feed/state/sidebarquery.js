import FeedDomain from '../actions/feed_domain'

const sidebarquery = (context, actions) => ({
  collection: 'tasks',
  query: actions.feed_actions.query().projectsquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 10000 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

export default sidebarquery
