export default {
  query() {
    return {
      connection: null,
      collection: 'tasksbacklog',
      pubsort: {due: -1},
      subsort: {due: 1},
      limit: { tasksbacklog: 5 },
    }
  },
  selector() {
    return {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}
  },
}

