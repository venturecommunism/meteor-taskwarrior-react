import FeedDomain from '../actions/feed_domain'

const filterprojectsquery = (context, actions) => ({
  collection: 'tasks',
  query: actions.feed.query().filtprojquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 10000 },
  taskids: FeedDomain.getTaskCommentIds(),

  actions: actions.feed,

  context: () => context,
})

export default filterprojectsquery
