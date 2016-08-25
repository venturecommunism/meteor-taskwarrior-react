import { taskspending } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'

const FeedDomain = {
  // these are pulling from the Minimongo cache, only the subscription can
  // fetch data from the server

  upprojorcont() {
    var queryParams = FlowRouter.current().queryParams
    if (FlowRouter.getQueryParam('type') == 'project' || FlowRouter.getQueryParam('projects')) {
      var id = queryParams.projects
      var projectprojorcont = taskspending.findOne({ project: {$exists: 1}, _id: id})
      var projectid = projectprojorcont ? projectprojorcont.project : null
      FlowRouter.setQueryParams({ projects: projectid })
    } else if (FlowRouter.getQueryParam('type') == 'context') {
      var id = queryParams.contexts
      var projectprojorcont = taskspending.findOne({ context: {$exists: 1}, _id: id})
      var contextid = projectprojorcont ? projectprojorcont.context : null
      FlowRouter.setQueryParams({ contexts: contextid })
    }
    //sweetAlert("project", projectid)
  },

};

export default FeedDomain
