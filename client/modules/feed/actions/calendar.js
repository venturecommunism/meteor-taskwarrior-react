export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1


    function selector() {
//    function selector({ Meteor, Session }) {
//    Session.set('now', formattedNow())
//    var now = Session.get('now')
      var now = formattedNow()
      var query = { due: {$gte: now} }
      return query
    }

    return {
      name: 'calendar',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {due: -1},
      subsort: {due: 1},
      publimit: 1,
      sublimit: sublimit ? sublimit : 1
    }
  },
}

