import { combineReducers } from 'redux'

import { initContext } from './configs/context'
import { createApp } from 'mantra-core'

import apolloModule from './modules/apollo'
import feedModule from './modules/feed'
import pomodoroModule from './modules/pomodoro'
import timerModule from './modules/timer'

import { feedReducer } from './modules/feed/actions/feed'

const rootReducer = combineReducers({
  feedReducer,
})

const context = initContext(rootReducer)

const app = createApp(context)

app.loadModule(apolloModule)
app.loadModule(feedModule)
app.loadModule(pomodoroModule)
app.loadModule(timerModule)

app.init()

