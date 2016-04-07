import FeedDomain from '../actions/feed_domain'

const filterprojectsquery = (context, actions) => ({
  query: actions.feed_actions.query().filtprojquery,
  recordcount: { tasks: 10000 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

export default filterprojectsquery
