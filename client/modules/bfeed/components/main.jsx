import React from 'react'

import Feed from './feed.jsx'
import CreateTask from './createtask.jsx'

import SideBar from './sidebar.jsx'
import sidebar from '../actions/sidebar'

import Calendar from './feed.jsx'
import PreviousCalendar from './feed.jsx'
import OverDue from './feed.jsx'

export default ({data, actions}) => (
  <div className="row">
    <div className="col-md-3" style={{"backgroundColor": "gray"}}>
      <SideBar data={data.sidebar} actions={sidebar} />
    </div>
    <div className="col-md-9">
      <Calendar data={data.calendar} />
      <CreateTask data={data.createtask} />
      <PreviousCalendar data={data.previouscalendar} />
      <OverDue data={data.overdue} />
      <Feed data={data.feed} />
    </div>
  </div>
)
