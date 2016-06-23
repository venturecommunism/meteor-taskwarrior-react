import { taskspending } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'

export default {
  backoneworkflow() {
  },
  buttontext() {
    return "Back one workflow step"
  },
  buttonpress({context}, e) {
    var workflowsteps = [ "/tw-ui/0.inbox", "/tw-ui/1.topprojectinbox", "/tw-ui/2.selectingproject", "/tw-ui/3.projectselected", "/tw-ui/4.topcontextinbox", "/tw-ui/5.selectingcontext", "/tw-ui/6.contextselected" ]
    var uuid = e.target.className
    var task = taskspending.find({uuid: uuid}).fetch()[0]
    var taskworkflow = task.workflow
    var position = workflowsteps.indexOf(taskworkflow)
    var newworkflow = workflowsteps[position - 1]
    var id = task._id
    delete task._id
    delete task.workflow
    task.workflow = newworkflow
    sweetAlert("task", JSON.stringify(task))
    if (newworkflow == "/tw-ui/5.selectingcontext" && !task.context) {
      newworkflow = "/tw-ui/4.topcontextinbox"
    }
    if (newworkflow == "/tw-ui/4.topcontextinbox" && task.type != "context" {
      newworkflow = "/tw-ui/3.projectselected"
    }
    if (newworkflow == "/tw-ui/2.selectingproject" && !task.project) {
      newworkflow = "/tw-ui/1.topprojectinbox"
    }
    Meteor.call('tasks.update', {workflow: newworkflow}, id)
  },
}

