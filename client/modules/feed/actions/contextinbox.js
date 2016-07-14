export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

    function selector() {
      return {workflow: "/tw-ui/4.topcontextinbox"}
    }

    return {
      name: 'contextinbox',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: 1,
    }
  },
}

