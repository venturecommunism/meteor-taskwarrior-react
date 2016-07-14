export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

    function selector() {
      return {workflow: "/tw-ui/1.topprojectinbox"}
    }

    return {
      name: 'projectinbox',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: 1,
    }
  },
}

