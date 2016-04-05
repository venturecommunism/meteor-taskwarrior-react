import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer'

import FeedDomain from '../actions/feed_domain'

export const buttonComposer = ({context}, onData) => {
  const {Meteor, Collections} = context()

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

  var recordCount = {tasks: 1}

  const feedtasks = FeedDomain.getAllFeedTasks()
  //sweetAlert("feedtasks", feedtasks)
  const taskIds = FeedDomain.getTaskCommentIds()

  var queryParams = FlowRouter.current().queryParams
  var project = queryParams.projects

  if (Meteor.subscribe('feed', fields, recordCount, taskIds).ready()) {
    const task = Collections.tasks.find({_id: project}).fetch()
    onData(null, {task});
  }
}

export const depsMapper = (context, actions) => ({
  buttonpress: actions.feed_actions.settle,
  context: () => context,
})

export default (component) => composeAll(
  composeWithTracker(buttonComposer),
  useDeps(depsMapper)
)(component);
