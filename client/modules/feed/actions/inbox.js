export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

    function selector() {
      return {status: "pending", workflow: "/tw-ui/0.inbox"}
    }

    return {
      name: 'inbox',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      publimit: 1,
      sublimit: sublimit ? sublimit : 1,
    }
  },
}

