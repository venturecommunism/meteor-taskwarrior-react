import FeedDomain from '../actions/feed_domain'

const sidebarquery = (context, actions) => ({
  query: actions.feed_actions.query().projectsquery,
  recordcount: { tasks: 10000 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

export default sidebarquery
