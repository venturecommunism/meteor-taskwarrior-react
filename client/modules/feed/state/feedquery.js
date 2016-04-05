export default (context, actions) => ({
  query: actions.feed_actions.query().feedquery,
  context: () => context,
})
