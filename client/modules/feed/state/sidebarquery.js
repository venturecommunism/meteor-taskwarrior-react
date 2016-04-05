export default (context, actions) => ({
  query: actions.feed_actions.query().projectsquery,
  context: () => context,
})
