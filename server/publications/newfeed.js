import {tasks, taskspending, tasksbacklog} from '/lib/collections/collections'
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export default function () {
  Meteor.publish('newfeed', function(queries) {
//fields, query, sort, limits

check(queries, Array)

console.log(queries)

      var query = queries[0]
      var q = query.query
      var f = query.fields
      var ps = query.pubsort
      var l = query.limit
      const taskscursor = tasks.find(q, {fields: f, sort: ps, limit: l})
      console.log(taskscursor)
/*
    check(queries, Match(Array))
    check(queries[collection].limits, optional({
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


    check(queries[0].query.fields, {
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
    })

    check(queries[1].query.fields, {
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
    })

    check(queries[2].query.fields, {
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
    })


    var userId = this.userId
    if (adminUser(userId)) {
      let cursors = []

//console.log("YOYO", queries[0])

      var query = queries[0]
      var q = query.query
      var f = query.fields
      var ps = query.pubsort
      var l = query.limit
      const taskscursor = tasks.find(q, {fields: f, sort: ps, limit: l})
      var query = queries[1]
      var q = query.query
      var f = query.fields
      var ps = query.pubsort
      var l = query.limit
      const taskspendingcursor = taskspending.find(q, {fields: f, sort: ps, limit: l})
      var query = queries[2]
      var q = query.query
      var f = query.fields
      var ps = query.pubsort
      var l = query.limit
      const tasksbacklogcursor = tasksbacklog.find(q, {fields: f, sort: ps, limit: l})
      cursors.push(taskscursor)
      cursors.push(taskspendingcursor)
      cursors.push(tasksbacklogcursor)

//      queries.forEach( function(query) { 
//        var cursor = Mongo.Collection.get(query.collection, query.query, {fields: query.fields, sort: query.pubsort, limit: query.limit})

//        cursors.push(cursor)
//      })
      return cursors
    }
  })
}
