export default {
  query() {
    function taskspendingselector() {
      var now = formattedNow()
      return { due: {$exists: 1} }
    }
    function tasksbacklogselector() {
      return {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}
    }
    function tasksselector() {
      var query = {}
      return query
    }

    return {
      connection: null,
      queries: [{
        collection: 'tasks',
        query: {
          selector: tasksselector,
          pubsort: {created: -1},
          subsort: {created: -1},
          limit: 10000,
          fields: {
            _id: true,
            description: true,
            uuid: true,
            status: true,
            entry: true,
            likecount: true,
            taskcommentcount: true,
            username: true,
            created: true,
            owner: true,
            type: true,
            workflow: true,
            project: true,
            due: true,
          },
        }
      },{
        collection: 'tasksbacklog',
        query: {
          selector: tasksbacklogselector,
          pubsort: {created: -1},
          subsort: {created: 1},
          limit: 10000,
          fields: {
            _id: true,
            description: true,
            uuid: true,
            status: true,
            entry: true,
            likecount: true,
            taskcommentcount: true,
            username: true,
            created: true,
            owner: true,
            type: true,
            workflow: true,
            project: true,
            due: true,
          },
        },
      },{
        collection: 'taskspending',
        query: {
          selector: taskspendingselector,
          pubsort: {created: -1},
          subsort: {created: 1},
          limit: 80,
          fields: {
            _id: true,
            description: true,
            uuid: true,
            status: true,
            entry: true,
            likecount: true,
            taskcommentcount: true,
            username: true,
            created: true,
            owner: true,
            type: true,
            workflow: true,
            project: true,
            due: true,
          },
        },
      }
    ]}
  },
}

