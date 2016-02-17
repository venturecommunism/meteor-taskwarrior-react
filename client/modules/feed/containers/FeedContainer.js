// FeedData handles all data subscriptions and pushes data down to
// children via props.
//
// This component is a container or 'view controller' and will gather
// any data needed from the domain objects and handle subscriptions
//
// In a future version the children will be able to specify what fields
// they need, however currently they're stored in this component.

/* global FeedList, ReactMeteorData, FeedDomain */

import {Tasks, TaskComments} from '/lib/feed'
import Feed from '../components/Feed.jsx'
import FeedDomain from '../actions/feed_domain.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composerfn1 = ({context}, onData) => {
  const {Meteor, Collections, Tracker} = context()

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
    },
    taskComments: {
      _id: true,
      created: true,
      username: true,
      description: true,
      task: true,
    }
  }

  let recordCount = {tasks: 20}

  sweetAlert("fields.tasks", Object.keys(fields.tasks))
  sweetAlert("FeedDomain", Object.keys(FeedDomain))
  const feedtasks = FeedDomain.getAllFeedTasks()
  // sweetAlert("feedtasks", feedtasks)
  const taskIds = FeedDomain.getTaskCommentIds()
  // sweetAlert("taskIds", taskIds)
  if (Meteor.subscribe("feed", fields, recordCount, taskIds).ready()) {
    // sweetAlert("subscribe error: " + err + ", fields: " + Object.keys(fields.tasks))
    const tasks = Collections.Tasks.find().fetch();
    // sweetAlert("success", Object.keys(tasks[1]))
    onData(null, {tasks});
  }
};

export default composeAll(
  composeWithTracker(composerfn1),
  useDeps()
)(Feed)
