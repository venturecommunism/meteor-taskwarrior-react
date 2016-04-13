import { combineReducers } from 'redux'
import {initContext} from './configs/context'
import {createApp} from 'mantra-core'

// modules
import coreModule from './modules/core'
import commentsModule from './modules/comments'
import _homeModule from './modules/_home'
import _usersModule from './modules/_users'
import tasksModule from './modules/tasks'
import feedModule from './modules/feed'

// kenniscentrum modules
//import _homeModule from './modules/_home/index.js'
import _layoutModule from './modules/_layout/index.js'
import sideMenuModule from './modules/sidemenu/index.js'
//import _usersModule from './modules/_users/index.js'
import kennisCentrumModule from './modules/kenniscentrum/index.js'
import contactenModule from './modules/contacten/index.js'
import profielModule from './modules/profiel/index.js'
import snackbarModule from './modules/snackbar/index.js'

//reducers
import { coreReducer } from './modules/core/actions/core'
import { kennisCentrumReducer } from './modules/kenniscentrum/actions/files.js'
import { layoutReducer } from './modules/_layout/actions/layout.js'
import { contactsReducer } from './modules/contacten/actions/contacten'
import { contactsSearchReducer } from './modules/contacten/actions/search'
import { profileReducer } from './modules/profiel/actions/profiel'
import { favorietenReducer } from './modules/favorieten/actions/favorieten'
import { snackbarReducer } from './modules/snackbar/actions/snackbar'

// reducers
import { feedReducer } from './modules/feed/actions/feed'

const rootReducer = combineReducers({
  coreReducer,
  feedReducer,
  snackbarReducer,
  favorietenReducer,
  kennisCentrumReducer,
  layoutReducer,
  contactsReducer,
  contactsSearchReducer,
  profileReducer
})

const context = initContext(rootReducer)

const app = createApp(context)
app.loadModule(coreModule)
app.loadModule(commentsModule)

app.loadModule(_homeModule)
app.loadModule(_usersModule)
app.loadModule(tasksModule)
app.loadModule(feedModule)

//loading for kenniscentrum
app.loadModule(snackbarModule)
app.loadModule(_layoutModule)
app.loadModule(contactenModule)
app.loadModule(sideMenuModule)
//app.loadModule(_homeModule)
app.loadModule(profielModule)
//app.loadModule(_usersModule)
app.loadModule(kennisCentrumModule)

app.init()
