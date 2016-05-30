export default {
  query() {

  function selector() {
    // Session.set('now', formattedNow())
    var now = formattedNow()
    var query = { due: {$lt: now} }
    return query
  }

    return {
      name: 'overdue',
      connection: null,
      collection: 'taskspending',
      selector: selector,
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

