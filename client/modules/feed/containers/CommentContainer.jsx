// FeedData handles all data subscriptions and pushes data down to
// children via props.
//
// This component is a container or 'view controller' and will gather
// any data needed from the domain objects and handle subscriptions
//
// In a future version the children will be able to specify what fields
// they need, however currently they're stored in this component.

import FeedContainer from './FeedContainer'
import FeedList from '../components/FeedList.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context}, onData) => {

  const fields = {
          _id: true,
          createdAt: true,
          username: true,
          desc: true,
          taskId: true,
  }
  const taskIds = this.data.taskIds;
  Meteor.subscribe("feed", fields, taskIds);

  const {Meteor, Collections} = context()

  if (getMeteorData.feedReady()) {
    sweetAlert("ready")
    taskIds: FeedDomain.getTaskCommentIds()
    const tasks = Collections.Tasks.find().fetch();
    onData(null, {tasks});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps
)(FeedList)
