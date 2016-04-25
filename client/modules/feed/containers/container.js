import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

const collectionComposer = ({ context, queryid, connection = null, collection, query, pubsort, subsort, limit, testmode = false }, onData) => {
  const { Meteor, Collections, Store } = context()
  const { coreReducer, feedReducer } = Store.getState()

  const fields = feedReducer.fields

  if (queryid) {
    rootquery = feedReducer[queryid]
    connection = rootquery.connection
    collection = rootquery.collection
    query = rootquery.query
    pubsort = rootquery.pubsort
    subsort = rootquery.subsort
    limit = rootquery.limit
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
        coreStore: coreReducer,
        feedStore: feedReducer,
      })
    }

    sendData()
    return Store.subscribe(sendData)
  }
}

export default (actionsMapper, component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(actionsMapper)
)(component)
