import { Random } from 'meteor/random'
import { tasks, taskspending, tasksbacklog, tmpmutation } from '/lib/collections/collections'

export const feed = {

  Query: {
    feed(root, args, context) {
      var limit = args.limit
      delete args.limit
      var skip = args.skip
      delete args.skip
      console.log(args)
      console.log(limit)
      return tasks.find(args, {limit: limit, skip: skip}).fetch();
    },
    oldfeed(root, args, context) {
      var limit = args.limit
      delete args.limit
      var skip = args.skip
      delete args.skip
      if (args.dueafter) {
        var dueafter = args.dueafter
        delete args.dueafter
        console.log(args)
        return taskspending.find({due: {$gte: dueafter}}, {limit: limit, skip: skip, sort: {due: 1}}).fetch()
      }
      if (args.duebefore) {
        var duebefore = args.duebefore
        delete args.duebefore
        console.log(args)
        return taskspending.find({due: {$lte: duebefore}}, {limit: limit, skip: skip, sort: {due: -1}}).fetch()
      }
      console.log(args)
      console.log(limit)
      return taskspending.find(args, {limit: limit, skip: skip}).fetch()
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
    count(root, args, context) {
      console.log("count")
      return taskspending.find({})
    },
    newcount(root, args, context) {
      return tasks.find({})
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

function JSONize(str) {
  return str
    // wrap keys without quote with valid double quote
    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":'})
    // replacing single quote wrapped ones to double quote
    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"'})
}


      console.log(root, args)
      switch (args.op) {
        case 'insert':
          break
        case 'update':
          console.log('update mutation')
          let selector = JSON.parse(JSONize(args.selector))
          console.log("args.selector", args.selector, typeof args.selector)
          console.log("selector", selector, typeof selector)
          let data = Mongo.Collection.get(args.collection).find(selector).fetch()
          console.log("data", data)
          return args
          break
        case 'remove':
          break
        default:
          return {error: "No Operation"}
      }
    },
    async feedinsert(root, args) {
      console.log("insert mutation")
      let id = tmpmutation.insert(args)
      return tmpmutation.findOne({_id: id})
    },
    async feedupdate(root, args) {
      console.log("update mutation")
      let returnvalue = tmpmutation.update(args, args)
      console.log(returnvalue)
      return returnvalue
    },
  },
  Count: {
    total: () => taskspending.find().count(),
    projects: () => taskspending.find({tags: "largeroutcome"}).count(),
    somedaymaybeproj: () => taskspending.find({tags: "somedaymaybeproj"}).count(),
    somedaymaybecont: () => taskspending.find({tags: "somedaymaybecont"}).count(),
    somedaymaybeprojproject: () => taskspending.find({tags: { $all: ["largeroutcome", "somedaymaybeproj"]}}).count(),
    somedaymaybecontcontext: () => taskspending.find({tags: { $all: ["largercontext", "somedaymaybecont"]}}).count(),
    contexts: () => taskspending.find({tags: "largercontext"}).count(),
    hardlandscape: () => taskspending.find({due: {$exists: 1}}).count(),
    bothcontextandproject: () => taskspending.find({context: {$exists: 1}, project: {$exists: 1}}).count(),
    contextonly: () => taskspending.find({context: {$exists: 1}, project: {$exists: 0}}).count(),
    contextonlynotsomedaymaybe: () => taskspending.find({context: {$exists: 1}, project: {$exists: 0}, tags: {$nin: ["somedaymaybe"]}}).count(),
    projectonly: () => taskspending.find({context: {$exists: 0}, project: {$exists: 1}}).count(),
    noprojectorcontext: () => taskspending.find({context: {$exists: 0}, project: {$exists: 0}}).count(),
    hardlandscapenoprojectorcontext: () => taskspending.find({due: {$exists: 1}, context: {$exists: 0}, project: {$exists: 0}}).count(),
    hardlandscapeprojectonly: () => taskspending.find({due: {$exists: 1}, context: {$exists: 0}, project: {$exists: 1}}).count(),
    hardlandscapecontextonly: () => taskspending.find({due: {$exists: 1}, context: {$exists: 1}, project: {$exists: 0}}).count(),
    hardlandscapebothprojectandcontext: () => taskspending.find({due: {$exists: 1}, context: {$exists: 1}, project: {$exists: 1}}).count(),
    nouuid: () => taskspending.find({uuid: {$exists: 0}}).count(),
    nouuidorprojectorcontext: () => taskspending.find({uuid: {$exists: 0}, project: {$exists: 0}, context: {$exists: 0}}).count(),
    nouuidprojectonly: () => taskspending.find({uuid: {$exists: 0}, project: {$exists: 1}, context: {$exists: 0}}).count(),
    nouuidcontextonly: () => taskspending.find({uuid: {$exists: 0}, project: {$exists: 0}, context: {$exists: 1}}).count(),
  },
  NewCount: {
    total: () => tasks.find().count(),
    projects: () => tasks.find({type: "project"}).count(),
    projectonly: () => tasks.find({context: {$exists: 0}, project: {$exists: 1}}).count(),
    contexts: () => tasks.find({type: "context"}).count(),
    contextonly: () => tasks.find({context: {$exists: 1}, project: {$exists: 0}}).count(),
    hardlandscape: () => tasks.find({due: {$exists: 1}}).count(),
    notaprojectorcontext: () => tasks.find({type: {$nin: ["context", "project"]}}).count(),
    nouuid: () => tasks.find({uuid: {$exists: 0}}).count(),
  },

}

export default feed
