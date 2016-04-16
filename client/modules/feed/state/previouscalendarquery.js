import FeedDomain from '../actions/feed_domain'

const feedquery = (context, actions) => ({
  collection: 'tasksbacklog',
  query: {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]},
  pubsort: {due: -1},
  subsort: {due: 1},
  limit: { tasksbacklog: 5 },
  taskids: FeedDomain.getTaskCommentIds(),
  context: () => context,
})

export default feedquery
