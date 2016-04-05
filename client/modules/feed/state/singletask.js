import FeedDomain from '../actions/feed_domain'

export default (context, actions) => ({
  feedquery: actions.feed_actions.query,
  recordcount: { tasks: 1 },
  context: () => context,
})

