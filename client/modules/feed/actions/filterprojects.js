export default {
  query() {

  function selector() {
    // get the URL contents
    var queryParams = FlowRouter.current().queryParams
    //sweetAlert("queryParams", queryParams)
    //sweetAlert("queryParams.projects", queryParams.projects)

    var query = {}
    query.filtprojquery = {}

    switch (JSON.stringify(queryParams)) {
      case "{}":
        //sweetAlert("case", "{}")
        query.filtprojquery = { type : 'project', project: {$exists: 0}}
        break
      default:
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

    switch (Boolean(queryParams.projects && queryParams.type)) {
      case (false):
        break
      default:
        var project = queryParams.projects
        query.filtprojquery._id = {$ne: project}
    }

    //sweetAlert("query.feedquery.project", query.feedquery.project)
    return query.filtprojquery
  }


    return {
      name: 'filterprojects',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: { taskspending: 10000 },
    }
  },
  selector() {
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
    return query.filtprojquery
  },
  assignProject({ context }, e, taskid, categoryid, type) {
    switch (type) {
      case 'project':
        var data = {project: categoryid, workflow: "/tw-ui/2.selectingproject"}
        break
      default:
        var data = {project: categoryid, workflow: "/tw-ui/2.selectingproject"}
    }
    Meteor.call('taskspending.update', data, taskid)
  },
}

