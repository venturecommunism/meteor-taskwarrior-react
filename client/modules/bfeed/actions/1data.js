export default {
  query() {

    function selector() {
      // get the URL contents
      var queryParams = FlowRouter.current().queryParams
      //sweetAlert("queryParams", queryParams)
      //sweetAlert("queryParams.projects", queryParams.projects)

      var query = {}
      query.feedquery = {}
      query.projectsquery = {}
      query.filtprojquery = {}

      switch (JSON.stringify(queryParams)) {
        case "{}":
          //sweetAlert("case", "{}")
          query.feedquery = { type: {$nin: ['project', 'context']}, "workflow.status": 'inbox'}
          query.projectsquery = { type : 'project', project: {$exists: 0} }
          query.filtprojquery = { type : 'project', project: {$exists: 0}}
          break
        default:
          query.feedquery = { type: {$nin: ['project', 'context']}}
          query.projectsquery = { type: 'project', project: { $exists: 0} }
          query.filtprojquery = { type: 'project' }
      }

      switch (queryParams.projects) {
        case (null || ''):
          break
        default:
          var project = queryParams.projects
          query.feedquery = { project: project }
          //sweetAlert("project", project)
          query.filtprojquery = { type: 'project', project: project}
      }

      switch (queryParams.type) {
        case (null || ''):
          break
        default:
          var type = queryParams.type
          //sweetAlert("type", type)
          query.feedquery.type = { $in: [type] }
      }

      switch (Boolean(queryParams.projects && queryParams.type)) {
        case (false):
          break
        default:
          var project = queryParams.projects
          var type = queryParams.type
          query.feedquery = { project: project }
          query.projectsquery = { type: type, project: project }
          query.filtprojquery._id = {$ne: project}
      }

      switch (Boolean(!queryParams.projects && queryParams.type)) {
        case (false):
          break
        default:
          query.feedquery.project = { $exists: 0 }
      }

      switch(queryParams.mode) {
        case ('do'):
          query.feedquery["workflow.status"] = {$nin: ['project', 'inbox'] }
          break
        default:
          query.feedquery["workflow.status"] = {$in: ['project', 'inbox'] }
      }

      //sweetAlert("query.feedquery.project", query.feedquery.project)
      query = {$or: [query.feedquery, query.filtprojquery, query.projectsquery]}
      return query
    }

    return {
      connection: null,
      queries: [{
        collection: 'tasks',
        query: {
          selector: selector,
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
          selector: selector,
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
          selector: selector,
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

