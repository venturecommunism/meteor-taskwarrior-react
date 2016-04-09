import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const stateComposer = ({ context }, onData) => {
  const { Store } = context()
 
  const { coreReducer, feedReducer } = Store.getState()
  console.log('Core Reducer is', coreReducer)
  console.log('Feed Reducer is', feedReducer)

  onData(null, {
    coreStore: coreReducer,
    feedStore: feedReducer
  })
  return Store.subscribe(() => {
    onData(null, {
      coreStore: coreReducer,
      feedStore: feedReducer
    })
  })
}

const collectionComposer = ({context, query, recordcount, taskids, testmode = false}, onData) => {
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

  if (Meteor.subscribe('feed', fields, recordcount, taskids).ready()) {
    const data = Collections.tasks.find(query, {$sort: {created: -1}}).fetch()
    onData(null, {data})
  }
}

export default (actionsMapper, component) => composeAll(
  composeWithTracker(stateComposer),
  composeWithTracker(collectionComposer),
  useDeps(actionsMapper)
)(component)
