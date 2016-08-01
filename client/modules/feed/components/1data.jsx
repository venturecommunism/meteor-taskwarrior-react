import React from 'react';

import ActionsMapper from '../containers/actionsmapper'
import Feed from './feed.jsx'

import Timers from '../../timer/containers/Home'

const FeedContainer = ActionsMapper('feed', Feed)
//Feed used to be wrapped in a standard container with 'feed' as an argument

import CreateTask from './createtask.jsx'
const CreateTaskContainer = ActionsMapper('createtask', CreateTask)

const PreviousCalendarContainer = ActionsMapper('previouscalendar', Feed)

import SideBar from './sidebar.jsx'
const SideBarContainer = ActionsMapper('sidebar', SideBar)

const InboxContainer = ActionsMapper('inbox', Feed)

const ProjectInboxContainer = ActionsMapper('projectinbox', Feed)

const SubInboxContainer = ActionsMapper('subinbox', Feed)

const ContextInboxContainer = ActionsMapper('contextinbox', Feed)

const OverDueContainer = ActionsMapper('overdue', Feed)

const CalendarContainer = ActionsMapper('calendar', Feed)

export default ({...queryParams, data, actions, ...date}) => (
  <div className="row">
    <div className="col-md-3" style={{"backgroundColor": "gray"}}>
      <p>{date.year}{date.month}{date.day}{date.hours}{date.minutes}{date.seconds}</p>
      <SideBarContainer {...queryParams} data={data.sidebar} />
    </div>
    <div className="col-md-9">
      <Timers {...queryParams} />
      { !queryParams.type && <InboxContainer title="Inbox" data={data.inbox} /> }
      { queryParams.type == 'project' && !queryParams.projects && <ProjectInboxContainer title="Project Inbox" data={data.projectinbox} /> }
      { queryParams.type == 'project' && <SubInboxContainer title="Subproject Inbox" data={data.subinbox} /> }
      { queryParams.type == 'context' && !queryParams.contexts && <ContextInboxContainer title="Context Inbox" data={data.contextinbox} /> }
      { !queryParams.type && <PreviousCalendarContainer title="Previous Calendar" data={data.previouscalendar} /> }
      { !queryParams.type && <OverDueContainer title="Overdue Calendar" data={data.overdue} /> }
      <FeedContainer title="Main Feed" data={data.feed} {...date} />
      <CalendarContainer title="Upcoming Calendar" data={data.calendar} {...date} />
      <CreateTaskContainer />
    </div>
  </div>
)
