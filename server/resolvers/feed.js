import { Random } from 'meteor/random'
import { tasks, taskspending, tasksbacklog, tmpmutation } from '/lib/collections/collections'

export const feed = {

  Query: {
    async query (root, args, context) {
      if (resolver_auth(context)) { return resolver_auth(context) }      
      let logicalswitch = resolvers_init(args)

      switch (logicalswitch) {
        case ('duebefore'):
          var duebefore = args.duebefore
          delete args.duebefore
          var cursor = await Mongo.Collection.get(collection).find({due: {$lte: duebefore}}, {limit: limit, sort: {due: -1}})
          break
        case ('dueafter'):
          var dueafter = args.dueafter
          delete args.dueafter
          var cursor = await Mongo.Collection.get(collection).find({due: {$gte: dueafter}}, {limit: limit, skip: skip, sort: {due: 1}})
          break
        case ('selector'):
          let selector = JSON.parse(JSONize(args.selector))
          var cursor = Mongo.Collection.get(collection).find(selector, {limit: limit, skip: skip})
          break
        default:
          errors = ['', 'no case in resolver, found this logical switch: ' + logicalswitch]
      }

      return metaquery(cursor, options, args, errors)
    },
    user (root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  Mutation: {
    async mutate (root, args, context) {
      if (resolver_auth(context)) { return resolver_auth(context) }
      let logicalswitch = resolvers_init(args)

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
          break
        case 'update':
      switch(logicalswitch) {
        case('op'):
          break
        case('selector'):
          var cursor = []
          break
        default:
          errors = ['', 'no case in resolver']
      }

          if (args.mutator) {
            let mutator = JSON.parse(JSONize(args.mutator))
            args.return = Mongo.Collection.get(collection).update(selector, {$set: mutator}).fetch()
          } else {
            args.return = Mongo.Collection.get(collection).find(selector).fetch()
            errors.push(...['mutator', 'No mutator'])
          }
          args.count = inputpipe.length
          args.errors = errors
          args.in = inputpipe
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
          break
        default:
          errors.push(...['op', 'No Operation'])
          args.errors = errors
      }

      return metamutate(cursor, options, args, errors)
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
