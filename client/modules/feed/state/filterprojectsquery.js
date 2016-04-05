export default (context, actions) => ({
  query: actions.feed_actions.query().filtprojquery,
  context: () => context,
})
