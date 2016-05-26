import { Random } from 'meteor/random'
import { Meteor } from 'meteor/meteor'
import { tasks, taskspending, tasksbacklog, tmpmutation } from '/lib/collections/collections'

export const feed = {

  Query: {
    async query(root, args, context) {

if (!context.user || context.user._id != Meteor.users.findOne({username: "admin"})._id) {
  console.log(Meteor.users.findOne({username: "admin"})._id)
  return {errors: ['', 'access denied']}
}

      let errors = []
      let limit = args.limit
      delete args.limit
      let skip = args.skip
      delete args.skip
      const selector = JSON.parse(JSONize(args.selector))
      const cursor = Mongo.Collection.get(args.collection).find(selector, {limit: limit, skip: skip})
      const metaquery = {}
      metaquery.count = cursor.count()
      metaquery.return = cursor.fetch()
      metaquery.subtotal = metaquery.return.length
      metaquery.errors = errors
      return metaquery
    },
    xquery(root, args, context) {
/*
      if (args.duebefore) {
        var limit = args.limit
        delete args.limit
        var duebefore = args.duebefore
        delete args.duebefore
        console.log(args)
        return tasksbacklog.find({due: {$lte: duebefore}, status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}, {limit: limit, sort: {due: -1}}).fetch()
      }
*/

/*
      if (!context.user || context.user._id != Meteor.users.findOne({username: "admin"})._id) {
        return {errors: ['', 'access denied']}
      }
*/

console.log(args)

      let limit = args.limit
      delete args.limit

      let skip = args.skip
      delete args.skip

      let collection = args.collection
      delete args.collection

      console.log(args)

      let logicalswitch = Object.keys(args).sort().join(" ")
      console.log(logicalswitch)

      switch (logicalswitch) {
        case ('duebefore'):
          console.log(args)
          var duebefore = args.duebefore
          delete args.duebefore
          var data = tasksbacklog.find({due: {$lte: duebefore}, status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}, {limit: limit, sort: {due: -1}}).fetch()
          return data
          break
        case (args.selector):
          let selector = JSON.parse(JSONize(args.selector))      
          var data = Mongo.Collection.get(args.collection).find(selector).fetch()
          return data
          break
        default:
          return {errors: ['', 'no case in resolver']}
      }
    },
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
    backlogfeed(root, args, context) {
      if (args.duebefore) {
        var limit = args.limit
        delete args.limit
        var duebefore = args.duebefore
        delete args.duebefore
        console.log(args)
        return tasksbacklog.find({due: {$lte: duebefore}, status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}, {limit: limit, sort: {due: -1}}).fetch()
      }
      console.log(args)
      console.log(args.limit)
      return tasksbacklog.find(args, {limit: limit}).fetch()
    },
  },
  Mutation: {
    async mutate(root, args) {

if (!context.user || context.user._id != Meteor.users.findOne({username: "admin"})._id) {
  return {errors: ['', 'acccess denied']}
}

      let errors = []
      let selector = JSON.parse(JSONize(args.selector))
      let data = Mongo.Collection.get(args.collection).find(selector).fetch()
      let inputpipe = data.map( function(item) {
        return item._id
      })
      if (args.mutator) {
        let mutator = JSON.parse(JSONize(args.mutator))
      }
      switch (args.op) {
        case 'insert':
          if (args.mutator) {
            let mutator = JSON.parse(JSONize(args.mutator))
            return Mongo.Collection.get(args.collection).insert(mutator).fetch()
          } else {
            errors.push(...['mutator', 'No mutator'])
          }
          args.count = inputpipe.length
          args.errors = errors
          args.in = inputpipe
          return args
          break
        case 'update':
          if (args.mutator) {
            let mutator = JSON.parse(JSONize(args.mutator))
            args.return = Mongo.Collection.get(args.collection).update(selector, {$set: mutator}).fetch()
          } else {
            args.return = Mongo.Collection.get(args.collection).find(selector).fetch()
            errors.push(...['mutator', 'No mutator'])
          }
          args.count = inputpipe.length
          args.errors = errors
          args.in = inputpipe
          return args
          break
        case 'remove':
          if (args.mutator) {
            let mutator = JSON.parse(JSONize(args.mutator))
            return Mongo.Collection.get(args.collection).update(selector, {$set: mutator}).fetch()
          } else {
            errors.push(...['mutator', 'No mutator'])
          }
          args.count = inputpipe.length
          args.errors = errors
          args.in = inputpipe
          return args
          break
        default:
          errors.push(...['op', 'No Operation'])
          args.errors = errors
          return args
      }
    },
    async _mutate(root, args) {

if (!context.user || context.user._id != Meteor.users.findOne({username: "admin"})._id) {
  return {errors: ['', 'access denied']}
}

      let errors = []
      let selector = JSON.parse(JSONize(args.selector))
      let data = Mongo.Collection.get(args.collection).find(selector).fetch()
      let inputpipe = data.map( function(item) {
        return item._id
      })
      return Mongo.Collection.get(args.collection).find(selector).fetch()
    },
  },
  MetaQuery: {
    return: (root) => root.return
  },
  MetaMutate: {
    return: (root) => root.return
  },
}

export default feed
