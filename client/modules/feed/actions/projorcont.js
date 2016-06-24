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
    return query.feedquery
  }

    return {
      name: 'projorcont',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: { taskspending: 1 },
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
    return query.feedquery
  },
  setProjectOrContext({context}, e, projcont, id) {
    const _id = id
    //sweetAlert("projorcont", _id)
    //sweetAlert("projorcont", e.target.value)
    var data = {type: projcont}
    if (data.type == "project") {
      data.workflow = "/tw-ui/1.topprojectinbox"
    }
    if (data.type == "context") {
      data.workflow = "/tw-ui/4.topcontextinbox"
    }
    Meteor.call('taskspending.update', data, _id)
    // {_id: _id}, {$set: {type: projcont}})
  },
}

