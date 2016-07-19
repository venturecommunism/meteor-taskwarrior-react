export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

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
      subsort: {due: -1},
      publimit: 1,
      sublimit: sublimit,
    }
  },
}

