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

  var project = (FeedDomain.getProjectsParam() == 'true') ? 'project' : 0
  //sweetAlert("projectfilter", projectfilter)

  var query = {}
  if (project) {
    query.type = { $in: [project] }
  }

  if (Meteor.subscribe('feed', fields, recordCount, taskIds).ready()) {
    //sweetAlert("query", query)
    const collection = Collections.tasks.find(query).fetch();
    const projects = Collections.tasks.find({type: "project"}).fetch()
    //sweetAlert("collection", collection)
    onData(null, {collection, projects});
  }
};

export default (component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps()
)(component);
