export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1
   var project = FlowRouter.current().queryParams.projects

    function selector() {
      return {status: "pending", project: project, workflow: "/tw-ui/2.selectingproject"}
    }

    return {
      name: 'subinbox',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: 1,
    }
  },
}

