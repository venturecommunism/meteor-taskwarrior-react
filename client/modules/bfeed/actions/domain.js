import { tasks } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'

const FeedDomain = {
  // these are pulling from the Minimongo cache, only the subscription can
  // fetch data from the server

  upprojorcont() {
    var queryParams = FlowRouter.current().queryParams
    var id = queryParams.projects
    var projectprojorcont = tasks.findOne({ project: {$exists: 1}, _id: id})
    var projectid = projectprojorcont ? projectprojorcont.project : null
    FlowRouter.setQueryParams({ projects: projectid })
    //sweetAlert("project", projectid)
  },

};

export default FeedDomain
