import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

import FeedDomain from '../actions/feed_domain'

export const currentprojcontComposer = ({context, feedquery}, onData) => {
  const {Meteor, Collections} = context();
  var query = feedquery().feedquery
  var queryParams = FlowRouter.current().queryParams
  var project = queryParams.projects
  if (project) {
    var query = { _id: project }
  } else {
    // TODO: find a better way to return no data instead of using a bad query
    var query = { crazyquery: {$exists: 1} }
  }

  //sweetAlert("query", JSON.stringify(query))
  var projquery = feedquery().projectsquery
  var filtprojquery = feedquery().filtprojquery
  //sweetAlert("projquery", Object.keys(projquery))

  const fields = {
    tasks: {
      _id: true,
      description: true,
      uuid: true,
      status: true,
      entry: true,
      likecount: true,
      taskcommentcount: true,
      username: true,
      created: true,
      owner: true,
      type: true,
      workflow: true,
      project: true,
      super: true,
    },
    taskComments: {
      _id: true,
      created: true,
      username: true,
      description: true,
      task: true,
    }
  }

  let recordCount = {tasks: 1}

  //sweetAlert("query", query)	

  //sweetAlert("fields.tasks", Object.keys(fields.tasks))
  //sweetAlert("FeedDomain", Object.keys(FeedDomain))
  const feedtasks = FeedDomain.getAllFeedTasks()
  //sweetAlert("feedtasks", feedtasks)
  const taskIds = FeedDomain.getTaskCommentIds()
  //sweetAlert("taskIds", taskIds)
  //sweetAlert("subscription", Object.keys(Meteor.subscribe("feed", fields, recordCount, taskIds)))

  if (Meteor.subscribe('feed', fields, recordCount, taskIds).ready()) {
    const collection = Collections.tasks.find(query, {$sort: {created: 1}}).fetch()
    //sweetAlert("collection results", JSON.stringify(collection))
    const task = collection[0] ? collection[0] : {}
    //sweetAlert("task", Object.keys(task))
    onData(null, {task})
  }
};

export const projcontdepsMapper = (context, actions) => ({
  feedquery: actions.feed_actions.query,
  context: () => context,
})

export default (component) => composeAll(
  composeWithTracker(currentprojcontComposer),
  useDeps(projcontdepsMapper)
)(component);