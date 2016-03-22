import FeedDomain from './feed_domain.jsx'

export default {
  assignProject(e, t) {
    var _id = e.target.parentNode.id
    var queryParams = FlowRouter.current().queryParams
    switch (queryParams.type) {
      case 'project':
        var data = {super: e.target.id, workflow: {status: "project", workflow: ["project"]}}
        break
      default:
        var data = {project: e.target.id, workflow: {status: "project", workflow: ["project"]}}
    }
    Meteor.call('tasks.update', data, _id)
  },
};
