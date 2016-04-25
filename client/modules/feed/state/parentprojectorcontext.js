import FeedDomain from '../actions/feed_domain'

const parentprojectorcontext = (context, actions) => ({
  queryid: 'parentprojectorcontext',

  //TODO: use a new composer/container to remove query, limit and taskids since no query is necessary
  data: {},
  buttonpress: FeedDomain.upprojorcont,
  buttontext: "Up one level",
  context: () => context,
})

export default parentprojectorcontext
