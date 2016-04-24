import {tasks, TaskComments, taskspending, tasksbacklog} from '/lib/collections'
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

//TODO: pull this out into a library function or user Roles package
function adminUser(userId) {
  var adminUser = Meteor.users.findOne({username:"admin"})
  return (userId && adminUser && userId === adminUser._id)
}

var optional = Match.Optional

Meteor.publish('feed', function(fields, query, sort, limits) {
  check(limits, optional({
                           taskspending: optional(Number), 
                           tasks: optional(Number),
                           tasksbacklog: optional(Number),
                          }))
  check(sort, Match.Optional(Object))
  check(query, Match.Optional(Object))

  console.log('Publishing Tasks', fields)
  console.log('Limit:', limits)

  // SECURITY NOTE
  // if this was data that could not be shown to a specific set of
  // users or a logged out user, you would check here to verify they're
  // allowed to receive the data.
  // **TRUST NOTHING FROM THE CLIENT** instead ask the server what they're
  // user ID is and check their permissions to see if the role is met, never
  // never pass in the user ID from the client as they could guess an admin
  // ID and gain access.
  //
  //  if (!this.userId)
  //       throw new Meteor.Error(401, "Access denied, please login");
  //        or
  //  if (Roles.userIsInRole(this.userId, 'admin'))
  //       throw new Meteor.Error(403, "Not authorized to view this data");
  // -----------------------------------------------------------------------

  // ensure *only* the fields we whitelist are passed in. Unless wrapped in
  // Match.Optional it will be required. If any key does not match the
  // publication will fail and throw an error
  check(fields, {
    tasks: {
      _id: Boolean,  // id required for security
      title: optional(Boolean),
      description: optional(Boolean),
      likecount: optional(Boolean),
      taskcommentcount: optional(Boolean),
      username: optional(Boolean),
      created: optional(Boolean),
      owner: optional(Boolean),
      status: optional(Boolean),
      entry: optional(Boolean),
      uuid: optional(Boolean),
      type: optional(Boolean),
      workflow: optional(Boolean),
      project: optional(Boolean),
      super: optional(Boolean),
      due: optional(Boolean),
    },
  })

  var userId = this.userId
  if (adminUser(userId)) {
    // Mongo Cursors
    const taskscursor = tasks.find(query, {fields: fields.tasks, sort: sort, limit: limits.tasks})
    const taskspendingcursor = taskspending.find(query, {fields: fields.tasks, sort: sort, limit: limits.taskspending})
    const tasksbacklogcursor = tasksbacklog.find(query, {fields: fields.tasks, sort: sort, limit: limits.tasksbacklog})

    // Cursor Array
    let cursors = []
    if (limits.tasks) {
      cursors.push(taskscursor)
    }
    if (limits.taskspending) {
      cursors.push(taskspendingcursor)
    }
    if (limits.tasksbacklog) {
      cursors.push(tasksbacklogcursor)
    }

    // Return Mongo Cursor Array as a Reactive Join
    return cursors
  }
})
