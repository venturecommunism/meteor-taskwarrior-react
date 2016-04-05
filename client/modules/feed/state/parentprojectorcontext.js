import FeedDomain from '../actions/feed_domain'

export default (context, actions) => ({
  query: actions.feed_actions.query().feedquery,
  recordcount: { tasks: 1 },
  taskids: FeedDomain.getTaskCommentIds(),
  //TODO: use a new composer/container to remove query, recordcount and taskids since no query is necessary
  data: {},
  buttonpress: actions.feed_actions.upprojorcont,
  buttontext: "Up one level",
  context: () => context,
})

