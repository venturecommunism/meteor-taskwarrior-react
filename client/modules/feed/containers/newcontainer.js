import { composeWithTracker, composeAll } from 'mantra-core'
import { useDeps } from '/lib/helpers/useDeps'

const collectionComposer = ({ context, connection = null, collection, query, pubsort, subsort, limit, testmode = false }, onData) => {
  const { Meteor, Collections, Store } = context()
  const { feedReducer } = Store.getState()

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
      due: true,
    },
  }

  if (Meteor.subscribe('feed', fields, query, pubsort, limit).ready()) {
    const data = Mongo.Collection.get(collection, { connection: connection }).find(query, {sort: subsort}).fetch()

    //console.log('Connection', connection)
    //console.log('Collection', collection)
    //console.log('Query, RemotePublishSort, LocalSubscribeSort and Limit are', query, pubsort, subsort, limit)
    //console.log('Count', data.length)

    const sendData = () => {
      onData(null, {
        data,
        feedStore: feedReducer,
      })
    }

    sendData()
    return Store.subscribe(sendData)
  }
}

const initialMapper = (context, actions, thing) => ({
  connection: null,
  collection: 'taskspending',
  query: actions.feed.calendarquery(),
  pubsort: {due: -1},
  subsort: {due: 1},
  limit: { taskspending: 100000 },

  actions: () => actions[thing],
  context: () => context,
})

const actionsMapper = (context, actions) => ({
  connection: initialMapper.connection,
  collection: initialMapper.collection,
  query: initialMapper.query,
  pubsort: initialMapper.pubsort,
  subsort: initialMapper.subsort,
  limit: initialMapper.limit,

  actions: () => initialMapper.actions,
  context: () => context,
})

export default (thing, component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(thing)
)(component)
