import { combineReducers } from 'redux'

import { initContext } from './configs/context'
import { createApp } from 'mantra-core'

import appModule from './modules/app'
import apolloModule from './modules/apollo'
import feedModule from './modules/feed'
import pomodoroModule from './modules/pomodoro'
import timerModule from './modules/timer'

import { sidebarReducer } from './modules/feed/actions/sidebar'

const rootReducer = combineReducers({
  sidebarReducer,
})

const context = initContext(rootReducer)
const app = createApp(context)

app.loadModule(appModule)
app.loadModule(apolloModule)
app.loadModule(feedModule)
app.loadModule(pomodoroModule)
app.loadModule(timerModule)
app.init()

