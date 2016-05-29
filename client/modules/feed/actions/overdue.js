export default {
  query() {
    return {
      connection: null,
      collection: 'taskspending',
      pubsort: {due: -1},
      subsort: {due: 1},
      limit: { taskspending: 100000 },
    }
  },
  selector() {
    // Session.set('now', formattedNow())
    var now = formattedNow()
    var query = { due: {$lt: now} }
    return query
  },
}

