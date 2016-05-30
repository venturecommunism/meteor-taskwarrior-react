import { combineReducers } from 'redux'

import { initContext } from './configs/context'
import { createApp } from 'mantra-core'

import apolloModule from './modules/apollo'
import feedModule from './modules/feed'
import pomodoroModule from './modules/pomodoro'
import timerModule from './modules/timer'
import bfeedModule from './modules/bfeed'

import { sidebarReducer } from './modules/feed/actions/sidebar'
import { bfeedSidebarReducer } from './modules/bfeed/actions/sidebar'

const rootReducer = combineReducers({
  sidebarReducer,
  bfeedSidebarReducer,
})

const context = initContext(rootReducer)

const app = createApp(context)

app.loadModule(apolloModule)
app.loadModule(feedModule)
app.loadModule(pomodoroModule)
app.loadModule(timerModule)
app.loadModule(bfeedModule)

app.init()

