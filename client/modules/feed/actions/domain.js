import { tasks } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'

const FeedDomain = {
  // these are pulling from the Minimongo cache, only the subscription can
  // fetch data from the server

  upprojorcont() {
    var queryParams = FlowRouter.current().queryParams
    var id = queryParams.projects
    var superprojorcont = tasks.findOne({ super: {$exists: 1}, _id: id})
    var superid = superprojorcont ? superprojorcont.super : null
    FlowRouter.setQueryParams({ projects: superid })
    //sweetAlert("super", superid)
  },

};

export default FeedDomain
