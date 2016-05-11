import { Random } from 'meteor/random'
import { tasks, taskspending } from '/lib/collections/collections'

export const feed = {

  Query: {
    feed(root, args, context) {
      return tasks.find().fetch();
    },
    oldfeed(root, args, context) {
      if (args.dueafter) {
        var limit = args.limit
        delete args.limit
        var dueafter = args.dueafter
        delete args.dueafter
        console.log(args)
        return taskspending.find({due: {$gte: dueafter}}, {limit: limit, sort: {due: 1}}).fetch()
      }
      console.log(args)
console.log(args.limit)
      return taskspending.find(args, {limit: limit}).fetch()
    },
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  Task: {
    randomString: () => Random.id(),
  },

}

export default feed
