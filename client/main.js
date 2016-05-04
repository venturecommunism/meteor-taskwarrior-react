import { combineReducers } from 'redux'
import {initContext} from './configs/context'
import {createApp} from 'mantra-core'

// modules
import _homeModule from './modules/_home'
import _usersModule from './modules/_users'
import feedModule from './modules/feed'
import pomodoroModule from './modules/pomodoro'
import timerModule from './modules/timer'

// reducers
import { feedReducer } from './modules/feed/actions/feed'

const rootReducer = combineReducers({
  feedReducer,
})

const context = initContext(rootReducer)

const app = createApp(context)

app.loadModule(_homeModule)
app.loadModule(_usersModule)
app.loadModule(feedModule)
app.loadModule(pomodoroModule)
app.loadModule(timerModule)

app.init()
