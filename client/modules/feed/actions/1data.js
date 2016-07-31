export default {
  query({FlowRouter}) {

   var sublimit = FlowRouter.current().queryParams.sublimit ? FlowRouter.current().queryParams.sublimit : 1

    function taskspendingselector() {
      var now = formattedNow()
      return {}
    }
    function tasksbacklogselector() {
      return {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}
    }

    return {
      connection: null,
      queries: [{
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
      }
    ]}
  },
}
