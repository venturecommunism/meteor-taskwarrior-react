import React from 'react';

import Container from '../../core/containers/newcontainer'
import Feed from './feed.jsx'

import Data from './1data.jsx'
const DataContainer = Container('data', Data)

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
        <DataContainer />
      </div>
    );
  }
}
