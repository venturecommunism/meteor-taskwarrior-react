//NOTE: doesn't seem to matter but 'data' is actually set elsewhere anyway but may need to grab it from here in the event it weren't found. either way a thing to check
//TODO: get rid of domain
import FeedDomain from '../actions/domain'

export default {
  //TODO: get rid of this query
  query() {

    function selector() {
      return {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}
    }

    return {
      name: 'parentprojectorcontext',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: { tasks: 1 },
    }
  },
  selector() {
    return {status: "completed", $and: [{tags: {$ne: "inbox"}}, {project: {$exists: false}}, {context: {$exists: false}}]}
  },
  data() {
    return {}
  },
  buttonpress() {
    return FeedDomain.upprojorcont()
  },
  buttontext() {
    return "Up One Level"
  },
}

