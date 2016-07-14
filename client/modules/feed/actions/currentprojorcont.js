export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

    var queryParams = FlowRouter.current().queryParams
    if (FlowRouter.getQueryParam('type') == 'project') {
      var id = queryParams.projects
    }
    else {
       var id = queryParams.contexts
    }

    function selector() {
      return {_id: id}
    }

    return {
      name: 'currentprojorcont',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {due: -1},
      subsort: {due: 1},
      limit: { tasks: 1 },
    }
  },
}

