import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const stateComposer = ({ context, connection = null, collection }, onData) => {
  const { Store } = context() 
  const { coreReducer, feedReducer } = Store.getState()

  console.log('Connection is', connection)
  console.log('Collection is', collection)
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

const collectionComposer = ({context, connection = null, collection, query, pubsort, subsort, limit, taskids, testmode = false}, onData) => {
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
      due: true,
    },
    taskComments: {
      _id: true,
      created: true,
      username: true,
      description: true,
      task: true,
    }
  }

  if (Meteor.subscribe('feed', fields, query, pubsort, limit, taskids).ready()) {
    const data = Mongo.Collection.get(collection, { connection: connection }).find(query, {sort: subsort}).fetch()

    console.log('Query, RemotePublishSort, LocalSubscribeSort and Limit are', query, pubsort, subsort, limit)
    console.log('Count', data.length)

    onData(null, {data})
  }
}

export default (actionsMapper, component) => composeAll(
  composeWithTracker(stateComposer),
  composeWithTracker(collectionComposer),
  useDeps(actionsMapper)
)(component)
