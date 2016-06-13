export default {
  query() {

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
      limit: 1,
    }
  },
}

