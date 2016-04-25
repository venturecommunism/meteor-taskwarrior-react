const feedquery = (context, actions) => ({
  connection: null,
  collection: 'taskspending',
  query: actions.feed.query().feedquery,
  pubsort: {created: -1},
  subsort: {created: -1},
  limit: { taskspending: 10000 },

  context: () => context,
})

export default feedquery
