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
      type: true,
      workflow: true,
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

  var type = FeedDomain.getTypeParam()
  //sweetAlert("projectfilter", projectfilter)

  var query = {}
  var query = { type: {$nin: ['project', 'context']}}
  if (type) {
    query.type = { $in: [type] }
  }
  if (FlowRouter.current().queryParams === {}) {
    query.workflow = {}
    query.workflow.status = 'inbox'
  }

  if (Meteor.subscribe('feed', fields, recordCount, taskIds).ready()) {
    //sweetAlert("query", query)
    const collection = Collections.tasks.find(query).fetch();
    const projects = Collections.tasks.find({type: "project"}).fetch()
    //sweetAlert('collection', Object.keys(collection[0]))
    //sweetAlert('projects', Object.keys(projects[0]))
    onData(null, {collection, projects});
  }
};

export default (component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps()
)(component);
