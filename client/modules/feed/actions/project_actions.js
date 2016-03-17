import FeedDomain from './feed_domain.jsx'

export default {
  assignProject(e, t) {
    var _id = e.target.parentNode.id
    var data = {project: e.target.id, workflow: {status: "project", workflow: ["project"]}}
    Meteor.call('tasks.update', data, _id)
//    tasks.update({_id: taskid}, {$set: {project: projid, workflow: {status: "project", workflow: ["project"]}}})
//    sweetAlert("test", e.target.id + " " + e.target.parentNode.id + Object.keys(e) )
  },
};
