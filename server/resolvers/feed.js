import { Random } from 'meteor/random'
import { tasks, taskspending, tasksbacklog, tmpmutation } from '/lib/collections/collections'

export const feed = {

  Query: {
    async query(root, args, context) {
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
    async _query(root, args, context) {
      let selector = JSON.parse(JSONize(args.selector))
      return Mongo.Collection.get(args.collection).find(selector).fetch()
    },
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  MetaQuery: {
    return: (root) => root.return
  },
  MetaMutate: {
    return: (root) => root.return
  },
  Mutation: {
    async mutate(root, args) {
      console.log(root, args)
      let errors = []
      let selector = JSON.parse(JSONize(args.selector))
      let data = Mongo.Collection.get(args.collection).find(selector).fetch()
      let inputpipe = data.map( function(item) {
        return item._id
      })
      switch (args.op) {
        case 'insert':
          if (args.mutator) {
            let mutator = JSON.prase(JSONize(args.mutator))
            return Mongo.Collection.get(args.collection).update(selector, {$set: mutator}).fetch()
          } else {
            errors.push(...['mutator', 'No mutator'])
          }
          console.log("data", data)
          args.count = inputpipe.length
          args.errors = errors
          args.in = inputpipe
          return args
          break
        case 'update':
          console.log('update mutation')
          if (args.mutator) {
            let mutator = JSON.prase(JSONize(args.mutator))
            return Mongo.Collection.get(args.collection).update(selector, {$set: mutator}).fetch()
          } else {
            errors.push(...['mutator', 'No mutator'])
          }
          console.log("data", data)
          args.count = inputpipe.length
          args.errors = errors
          args.in = inputpipe
          return args
          break
        case 'remove':
          console.log('remove mutation')
          if (args.mutator) {
            let mutator = JSON.prase(JSONize(args.mutator))
            return Mongo.Collection.get(args.collection).update(selector, {$set: mutator}).fetch()
          } else {
            errors.push(...['mutator', 'No mutator'])
          }
          console.log("data", data)
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
      let errors = []
      let selector = JSON.parse(JSONize(args.selector))
      let data = Mongo.Collection.get(args.collection).find(selector).fetch()
      let inputpipe = data.map( function(item) {
        return item._id
      })
      return Mongo.Collection.get(args.collection).find(selector).fetch()
    },
  },
}

export default feed
