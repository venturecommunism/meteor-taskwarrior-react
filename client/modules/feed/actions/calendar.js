export default {
  query() {
    return {
      connection: null,
      collection: 'taskspending',
      selector: 'selector',
      pubsort: {due: -1},
      subsort: {due: 1},
      limit: { taskspending: 100000 },
    }
  },
  selector({ Meteor, Session }) {
//    Session.set('now', formattedNow())
//    var now = Session.get('now')
    var now = formattedNow()
    var query = { due: {$gte: now} }
    return query
  },
}

