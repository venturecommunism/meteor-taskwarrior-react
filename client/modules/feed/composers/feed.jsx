/*
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

  //sweetAlert("fields.tasks", Object.keys(fields.tasks))
  //sweetAlert("FeedDomain", Object.keys(FeedDomain))
  const feedtasks = FeedDomain.getAllFeedTasks()
  //sweetAlert("feedtasks", feedtasks)
  const taskIds = FeedDomain.getTaskCommentIds()
  //sweetAlert("taskIds", taskIds)
  //sweetAlert("subscription", Object.keys(Meteor.subscribe("feed", fields, recordCount, taskIds)))
  if (Meteor.subscribe("feed", fields, recordCount, taskIds).ready()) {
    //sweetAlert("inside subscription")
    //sweetAlert("check for subscription error", Object.keys(fields.tasks))
    //const tasks = Collections.Tasks.find().fetch();
    const tasks = Tasks.find().fetch()
    //sweetAlert("success", Object.keys(tasks[1]))
    onData(null, {tasks});
  } else {
    //sweetAlert("subscription not ready")
    //sweetAlert("subscription error: ", err)
  }
};

export default composeAll(
  composeWithTracker(composerfn1),
  useDeps()
)(Feed)


*/

import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

import FeedDomain from '../actions/feed_domain.jsx'

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();

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

  //sweetAlert("fields.tasks", Object.keys(fields.tasks))
  //sweetAlert("FeedDomain", Object.keys(FeedDomain))
  const feedtasks = FeedDomain.getAllFeedTasks()
  //sweetAlert("feedtasks", feedtasks)
  const taskIds = FeedDomain.getTaskCommentIds()
  //sweetAlert("taskIds", taskIds)
  //sweetAlert("subscription", Object.keys(Meteor.subscribe("feed", fields, recordCount, taskIds)))

  if (Meteor.subscribe('feed', fields, recordCount, taskIds).ready()) {
    const collection = Collections._tasks.find().fetch();
    onData(null, {collection});
  }
};

export default (component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps()
)(component);
