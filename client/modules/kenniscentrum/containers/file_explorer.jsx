import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core'
import Component from '../components/FileExplorer/FileExplorer.jsx'

export const composer = ({ context, clearErrors, folderId, FlowRouter }, onData) => {
  const { Store, LocalState, Meteor, Collections } = context()
  const { kennisCentrumReducer } = Store.getState()
  console.log('Reducer is', Store.getState().kennisCentrumReducer)

  const isOverlayOpen = LocalState.get('OVERLAY_IS_OPEN') || false
  //const modalType = LocalState.get('MODAL_TYPE')

  /*USERLIST STORE */
  const isFetchingUserList = LocalState.get('LIST_USERS_REQUEST') || false
  const fetchUsersListError = LocalState.get('LIST_USERS_ERROR')
  const fetchUsersListSuccess = LocalState.get('LIST_USERS_SUCCESS')
  const usersList = LocalState.get('LIST_USERS_RESPONSE')

  /*FOLDER CREATION */
  const createFolderSuccess = LocalState.get('FOLDER_CREATE_SUCCESS')
  const isCreatingFolder = LocalState.get('FOLDER_CREATE_REQUEST') || false

  /*FOLDER CONTENTS */
  const isLoadingFolderContents = LocalState.get('FOLDER_CONTENTS_REQUEST')
  const folderContents = LocalState.get('CURRENT_FOLDER_CONTENT')

  //if (Meteor.subscribe('listFolderContents').ready()) {
  //  const folders = Collections.Folders.find().fetch()
  //  console.log('working', folders)
  //  onData(null, {
  //    //kenniscentrumStore: Store.getState().kennisCentrumReducer,
  //    //layoutStore: Store.getState().layoutReducer,
  //    folders
  //  })
  //}


  onData(null, {
    kenniscentrumStore: Store.getState().kennisCentrumReducer,
    layoutStore: Store.getState().layoutReducer,
  })
  return Store.subscribe(() => {
    onData(null, {
      kenniscentrumStore: Store.getState().kennisCentrumReducer,
      layoutStore: Store.getState().layoutReducer
    })
  })

}

const collectionComposer = ({context, folderId}, onData) => {
  const {Meteor, Collections} = context();
  console.log('folderId', folderId)
  if (Meteor.subscribe('kenniscentrum.listFolders', folderId).ready() && Meteor.subscribe('kenniscentrum.listFiles', folderId).ready()) {
    const folders = Collections.Folders.find().fetch()
    const files = Collections.Files.find().fetch()
    onData(null, {folders, files, subscriptionLoaded: true});
  } else {
    onData(null, {subscriptionLoaded: false});
  }
}

export const depsMapper = (context, actions) => ({
  uploadToS3: actions.kenniscentrum.uploadToS3,
  toggleOverlay: actions.layout.toggleOverlay,
  loadFolderContents: actions.kenniscentrum.loadFolderContents,
  gotoFolder: actions.kenniscentrum.gotoFolder,
  createFolder: actions.kenniscentrum.createFolder,
  loadFile: actions.kenniscentrum.loadFile,
  downloadFile: actions.kenniscentrum.downloadFile,
  makeFavorite: actions.kenniscentrum.makeFavorite,
  context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(collectionComposer),
  useDeps(depsMapper)
)(Component)
