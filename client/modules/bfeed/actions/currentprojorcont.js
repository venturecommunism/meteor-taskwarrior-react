export default {
  query() {

    var queryParams = FlowRouter.current().queryParams
    var id = queryParams.projects

    function selector() {
      return {_id: id}
    }

    return {
      name: 'currentprojorcont',
      connection: null,
      collection: 'tasks',
      selector: selector,
      pubsort: {due: -1},
      subsort: {due: 1},
      limit: { tasks: 1 },
    }
  },
}

