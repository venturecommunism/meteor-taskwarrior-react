import { composeWithTracker, composeAll } from 'mantra-core'
import { useDeps } from '/lib/helpers/usedeps'

const collectionComposer = ({ context, actions }, onData) => {
  const { Meteor, Collections, Store, LocalState } = context()
  const { sidebarReducer } = Store.getState()

  const error = actions.errortype ? LocalState.get(actions.errortype()) : null

  //sweetAlert("actions", Object.keys(actions().query()))
  const { connection, collection, pubsort, subsort, limit } = actions.query()
  const { selector } = actions
  var runselector = selector()

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

  if (Meteor.subscribe('feed', fields, runselector, pubsort, limit).ready()) {
    const data = Mongo.Collection.get(collection, { connection: connection }).find(runselector, {sort: subsort}).fetch()

    //console.log('Connection', connection)
    //console.log('Collection', collection)
    //console.log('Selector, RemotePublishSort, LocalSubscribeSort and Limit are', runselector, pubsort, subsort, limit)
    //console.log('Count', data.length)

    const sendData = () => {
      onData(null, {
        data,
        sidebarStore: sidebarReducer,
        error,
      })
      // clearErrors when unmounting the component
      return actions.clearErrors ? actions.clearErrors() : null
    }

    sendData()
    return Store.subscribe(sendData)
  }
}

export default (actionset, component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(actionset)
)(component)
