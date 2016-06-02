import {tasks, taskspending, tasksbacklog} from '/lib/collections/collections'
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export default function () {
  Meteor.publish('newfeed', function(queries) {

check(queries, Array)

//console.log(queries)
/*
    check(limits, optional({
                             taskspending: optional(Number), 
                             tasks: optional(Number),
                             tasksbacklog: optional(Number),
                            }))
    check(sort, Match.Optional(Object))
    check(query, Match.Optional(Object))
*/
/*
    console.log('Publishing Tasks', fields)
    console.log('Limit:', limits)
*/

    try {
      if (!this.userId) {
        throw 'no userid'
      } else if (!adminUser(this.userId)) {
        throw 'not admin user'
      }
    } catch (err) {
      console.log("here", err) // we log the standard JS error
      err == 'no userid' ? this.error(new Meteor.Error(401, 'Access denied. Please log in')) : ''
      err == 'not admin user' ? this.error(new Meteor.Error(403, 'Not authorized to view this data')) : ''
    }
/*
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
*/
    var userId = this.userId
    if (adminUser(userId)) {
      let cursors = []

//      const taskscursor = tasks.find(query, {fields: fields.tasks, sort: sort, limit: limits.tasks})
//      const taskscursor = tasks.find({description: "test"})
//      const taskspendingcursor = taskspending.find(query, {fields: fields.tasks, sort: sort, limit: limits.taskspending})
//      const tasksbacklogcursor = tasksbacklog.find(query, {fields: fields.tasks, sort: sort, limit: limits.tasksbacklog})
//      cursors.push(taskscursor)
  //    limits.taskspending ? cursors.push(taskspendingcursor) : ''
    //  limits.tasksbacklog ? cursors.push(tasksbacklogcursor) : ''



      var query = queries[0]
//console.log("collection", query.collection)
//console.log("queries0", query)
      var q = query.query.selector
//console.log("QUERY SELECTOR", q)
      var f = query.query.fields
      var ps = query.query.pubsort
      var l = query.query.limit
      const taskscursor = tasks.find(q, {fields: f, sort: ps, limit: l})
//const taskscursor = tasks.find(q)


      var query = queries[1]
//console.log("collection", query.collection)
//console.log("queries1", query)
      var q = query.query.selector
//console.log("QUERY SELECTOR", q)
      var f = query.query.fields
      var ps = query.query.pubsort
      var l = query.query.limit
      const tasksbacklogcursor = tasksbacklog.find(q, {fields: f, sort: ps, limit: l})
//console.log("tasksbacklogcursor", tasksbacklogcursor.fetch())


      var query = queries[2]
//console.log("collection", query.collection)
//console.log("queries2", query)
      var q = query.query.selector
      var f = query.query.fields
      var ps = query.query.pubsort
      var l = query.query.limit
      const taskspendingcursor = taskspending.find(q, {fields: f, sort: ps, limit: l})
      cursors.push(taskscursor)
      cursors.push(taskspendingcursor)
      cursors.push(tasksbacklogcursor)

//console.log(cursors)

      return cursors
    }
  })
}
