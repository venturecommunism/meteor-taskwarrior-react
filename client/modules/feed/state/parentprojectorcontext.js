import FeedDomain from '../actions/feed_domain'

const parentprojectorcontext = (context, actions) => ({
  collection: 'tasks',
  query: actions.feed_actions.query().feedquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  //TODO: use a new composer/container to remove query, limit and taskids since no query is necessary
  data: {},
  buttonpress: actions.feed_actions.upprojorcont,
  buttontext: "Up one level",
  context: () => context,
})

export default parentprojectorcontext
