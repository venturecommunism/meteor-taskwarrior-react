export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

    function selector() {
      return {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}
    }

    return {
      name: 'previouscalendar',
      connection: null,
      collection: 'tasksbacklog',
      selector: selector,
      pubsort: {due: -1},
      subsort: {due: -1},
      publimit: 1,
      sublimit: sublimit,
    }
  },
}

