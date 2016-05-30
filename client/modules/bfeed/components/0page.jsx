import React from 'react';

import Container from '../../core/containers/container'
import Feed from './feed.jsx'

import CreateTask from './createtask.jsx'
const CreateTaskContainer = Container('createtask', CreateTask)

const FeedContainer = Container('feed', Feed)
const PreviousCalendarContainer = Container('previouscalendar', Feed)

import SideBar from './sidebar.jsx'
const SideBarContainer = Container('sidebar', SideBar)

const OverDueContainer = Container('overdue', Feed)

const CalendarContainer = Container('calendar', Feed)

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3" style={{"backgroundColor": "gray"}}>
            <SideBarContainer />
          </div>
          <div className="col-md-9">
            <CalendarContainer />
            <CreateTaskContainer />
            <PreviousCalendarContainer />
            <OverDueContainer />
            <FeedContainer />
          </div>
        </div>
      </div>
    );
  }
}
