import { Random } from 'meteor/random'
import { tasks, taskspending, tasksbacklog } from '/lib/collections/collections'

export const feed = {

  Query: {
    feed(root, args, context) {
      var limit = args.limit
      return tasks.find({}, {limit: limit}).fetch();
    },
    oldfeed(root, args, context) {
      if (args.dueafter) {
        var limit = args.limit
        delete args.limit
        var dueafter = args.dueafter
        delete args.dueafter
        console.log(args)
        return taskspending.find({due: {$gte: dueafter}}, {limit: limit, sort: {due: -1}}).fetch()
      }
      if (args.duebefore) {
        var limit = args.limit
        delete args.limit
        var duebefore = args.duebefore
        delete args.duebefore
        console.log(args)
        return taskspending.find({due: {$lte: duebefore}}, {limit: limit, sort: {due: -1}}).fetch()
      }
      console.log(args)
      console.log(args.limit)
      return taskspending.find(args, {limit: limit}).fetch()
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
