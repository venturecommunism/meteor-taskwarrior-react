import { Random } from 'meteor/random'
import { Meteor } from 'meteor/meteor'
import { tasks, taskspending, tasksbacklog, tmpmutation } from '/lib/collections/collections'

export const feed = {

  Query: {
    async query(root, args, context) {

/*
if (!context.user || context.user._id != Meteor.users.findOne({username: "admin"})._id) {
  console.log(Meteor.users.findOne({username: "admin"})._id)
  return {errors: ['', 'access denied']}
}
*/

      let errors = []

      let limit = args.limit
      delete args.limit
      let skip = args.skip
      delete args.skip
      let collection = args.collection
      delete args.collection
      let logicalswitch = Object.keys(args).sort().join(" ")
      console.log("logicalswitch", logicalswitch)

      switch (logicalswitch) {
        case ('duebefore'):
          //console.log(args)
          var duebefore = args.duebefore
          delete args.duebefore
          var cursor = await Mongo.Collection.get(collection).find({due: {$lte: duebefore}, status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}, {limit: limit, sort: {due: -1}})
          break
        case ('selector'):
          let selector = JSON.parse(JSONize(args.selector))
          var cursor = Mongo.Collection.get(args.collection).find(selector)
          break
        default:
          errors = ['', 'no case in resolver']
      }

      const metaquery = {}
      metaquery.count = cursor ? cursor.count() : null
      metaquery.return = cursor ? cursor.fetch() : null
      metaquery.subtotal = cursor ? cursor.fetch().length : null
      metaquery.errors = errors
      return metaquery
    },
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
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
  },
  MetaQuery: {
    return: (root) => root.return
  },
  MetaMutate: {
    return: (root) => root.return
  },
}

export default feed
