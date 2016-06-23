import { taskspending } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'

export default {
  backoneworkflow() {
  },
  buttontext() {
    return "Back one workflow step"
  },
  buttonpress({context}, e) {
    sweetAlert("context thing", taskspending.findOne({uuid: e.target.className}).workflow)
  },
}

