const CREATE_FOLDER_REQUEST = 'kenniscentrum/CREATE_FOLDER_REQUEST'
const CREATE_FOLDER_SUCCESS = 'kenniscentrum/CREATE_FOLDER_SUCCESS'
const CREATE_FOLDER_FAIL = 'kenniscentrum/CREATE_FOLDER_FAIL'

const LOAD_CONTENT_REQUEST = 'kenniscentrum/LOAD_CONTENT_REQUEST'
const LOAD_CONTENT_SUCCESS = 'kenniscentrum/LOAD_CONTENT_SUCCESS'
const LOAD_CONTENT_FAIL = 'kenniscentrum/LOAD_CONTENT_FAIL'
const SET_CURRENT_FOLDER_DATA = 'kenniscentrum/SET_CURRENT_FOLDER_DATA'
const SET_CURRENT_FOLDER_CONTENTS = 'kenniscentrum/SET_CURRENT_FOLDER_CONTENTS'
const SET_CURRENT_FOLDER_IDENTIFIERS = 'kenniscentrum/SET_CURRENT_FOLDER_IDENTIFIERS'

const SET_CURRENT_FILE = 'kenniscentrum/SET_CURRENT_FILE'

//const LOAD_FAVORITES_REQUEST = 'kenniscentrum/LOAD_FAVORITES_REQUEST'
//const LOAD_FAVORITES_SUCCESS = 'kenniscentrum/LOAD_FAVORITES_SUCCESS'
//const LOAD_FAVORITES_FAIL = 'kenniscentrum/LOAD_FAVORITES_FAIL'
import { openSnackbar } from '../../snackbar/actions/snackbar'
import { loadKenniscentrumFavorites } from '../../favorieten/actions/favorieten'
import { TOGGLE_OVERLAY } from '../../_layout/actions/layout'

const initialState = {
  createFolderRequest: false,
  createFolderErrror: false,
  createFolderSuccess: false,
  loadContentRequest: false,
  loadContentSuccess: false,
  loadContentError: false,
  folderContents: {},
  currentFile: {},
  currentFolderName: 'home',
  currentFolderId: '',
  currentFolderData: [],
  subscriptionLoaded: false
}

export function kennisCentrumReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_FOLDER_REQUEST:
      return {
        ...state,
        createFolderRequest: true,
        createFolderError: false,
        createFolderSuccess: false
      }
    case
    SET_CURRENT_FOLDER_IDENTIFIERS:
      return Object.assign({}, state, {
        currentFolderId: action.folderIdentifier,
        currentFolderName: action.folderName
      })
    case
    CREATE_FOLDER_SUCCESS:
      return {
        ...state, createFolderRequest: false, createFolderSuccess: true
      }
    case
    CREATE_FOLDER_FAIL:
      return {
        ...state, createFolderRequest: false, createFolderError: true
      }
    case
    LOAD_CONTENT_REQUEST:
      return {
        ...state,
        loadContentRequest: true,
        loadContentSuccess: false,
        loadContentError: false
      }
    case
    SET_CURRENT_FILE:
      return {
        ...state, currentFile: action.currentFile
      }
    case
    SET_CURRENT_FOLDER_CONTENTS:
      return {
        ...state,
        currentFolderData: action.current
      }
    case
    LOAD_CONTENT_SUCCESS:
      return {
        ...state, loadContentSuccess: true, loadContentRequest: false
      }
    //return {...state, currentFolderId: action.currentFolderId, currentFolderName: action.currentFolderName}
    default:
      return state;
  }
}

export default {
  gotoFolder({ FlowRouter }, folderIdentifier) {
    if (folderIdentifier === 'home') return
    else {
      FlowRouter.go('/kenniscentrum/folder?id=' + folderIdentifier)
    }
  },
/*
  async makeFavorite({Store, Meteor}, docName, docId, type) {
    const { getState, dispatch } = Store
    const { currentFolderId } = getState().kennisCentrumReducer
    const userId = Meteor.userId()

    try {
      await Meteor.promise('kenniscentrum.createFavorite', docId, docName, userId, currentFolderId, type)

      openSnackbar(dispatch, `${docName} toegevoegd aan uw favorieten`, false)
      loadKenniscentrumFavorites(dispatch, Meteor)
    } catch (e) {
      console.log('Error saving favorite', e)
    }

  },
*/
  //async loadFavorites({Store, Meteor}) {
  //  const userId = Meteor.userId()
  //  try {
  //    const favs = Meteor.promise('kenniscentrum.loadFavorites', userId)
  //
  //  } catch (e) {
  //
  //  }
  //},

  downloadFile({Store, Meteor}, fileURL) {
    //TODO: Sign URL etc.
    window.location = fileURL
  },

  loadFile({ Store, Collections }, fileIdentifier) {
    const { dispatch } = Store
    const { Files } = Collections
    const currentFile = Files.findOne(fileIdentifier)
    console.log('CF', currentFile)
    dispatch({
      type: SET_CURRENT_FILE,
      currentFile
    })
  },

  async createFolder({Store, Meteor, actions}, folderName, allowedUsers = {}, parentFolder) {
    //CREATE FOLDER WITH PERMISSIONS
    const { dispatch, getState } = Store
    const { currentFolderId } = getState().kennisCentrumReducer

    //const allowedUsers = []
    const currentUser = Meteor.userId()

    dispatch({type: CREATE_FOLDER_REQUEST})

    if (!folderName || !currentFolderId) {
      dispatch({type: CREATE_FOLDER_FAIL})
      console.log('Foldernaam en gebruikers zijn verplicht')
    } else {
      try {
        await Meteor.promise('kenniscentrum.createFolder', folderName, currentUser, allowedUsers, currentFolderId)
        dispatch({type: CREATE_FOLDER_SUCCESS})
        dispatch({type: TOGGLE_OVERLAY})
        openSnackbar(dispatch, `Map "${folderName}" is aangemaakt`, false)
      } catch (e) {
        dispatch({
          type: CREATE_FOLDER_FAIL
        })
      }
    }
  },

  async loadFolderContents({Meteor, Store, Collections}, folderIdentifier) {
    const { dispatch, getState } = Store
    const { Folders, Files } = Collections

    const { folderContents } = getState().kennisCentrumReducer

    dispatch({
      type: LOAD_CONTENT_REQUEST
    })

    let folders;
    let currentFolder;
    let files;
    if (folderIdentifier === 'home') {
      currentFolder = Folders.findOne({folderName: folderIdentifier})
      folders = Folders.find({parentFolder: currentFolder._id}).fetch()
      files = Files.find({folderId: currentFolder._id}).fetch()
    } else {
      folders = Folders.find({parentFolder: folderIdentifier}).fetch()
      currentFolder = Folders.findOne(folderIdentifier)
      files = Files.find({folderId: folderIdentifier}).fetch()
    }
    dispatch({
      type: SET_CURRENT_FOLDER_IDENTIFIERS,
      folderIdentifier: currentFolder._id,
      folderName: currentFolder.folderName
    })

    dispatch({type: SET_CURRENT_FOLDER_CONTENTS, current: folders.concat(files)})
  },
  async uploadToS3({Meteor, Store, FlowRouter}, file){
    const currentUser = Meteor.userId() || '123'
    const { getState, dispatch } = Store
    const { currentFolderId } = getState().kennisCentrumReducer

    try {
      const { signedURL, url } = await Meteor.promise('kenniscentrum.signS3', file.name, file.type)
      await fetch(signedURL, {
        method: 'PUT',
        body: file,
        headers: {'x-amz-acl': 'public-read', 'Content-Disposition': 'attachment'}
      })
      await Meteor.promise('kenniscentrum.uploadFile', file.name, file.type, currentFolderId, url, currentUser)
      dispatch({type: TOGGLE_OVERLAY})
      openSnackbar(dispatch, `Bestand "${file.name}" is succesvol opgeslagen`, false)

    } catch (e) {
      console.log('ERR', e)
    }
  }
}
