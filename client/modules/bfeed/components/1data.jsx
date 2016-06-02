import React from 'react';

import ActionsMapper from '../../core/containers/actionsmapper'
import Feed from './feed.jsx'

const FeedContainer = ActionsMapper('feed', Feed)
//Feed used to be wrapped in a standard container with 'feed' as an argument

import CreateTask from './createtask.jsx'
const CreateTaskContainer = ActionsMapper('createtask', CreateTask)

const PreviousCalendarContainer = ActionsMapper('previouscalendar', Feed)

import SideBar from './sidebar.jsx'
const SideBarContainer = ActionsMapper('sidebar', SideBar)

const OverDueContainer = ActionsMapper('overdue', Feed)

const CalendarContainer = ActionsMapper('calendar', Feed)

export default ({data, actions}) => (
  <div className="row">
    <div className="col-md-3" style={{"backgroundColor": "gray"}}>
      <SideBarContainer data={data.sidebar} />
    </div>
    <div className="col-md-9">
{/*      <PreviousCalendarContainer data={data.previouscalendar} /> */}
{/*      <OverDueContainer data={data.overdue} /> */}
      <FeedContainer data={data.feed} />
      <CalendarContainer data={data.calendar} />
      <CreateTaskContainer />
    </div>
  </div>
)
