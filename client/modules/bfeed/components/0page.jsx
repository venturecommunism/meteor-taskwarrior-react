import React from 'react';

import Container from '../../core/containers/newcontainer'
import Feed from './feed.jsx'

import MainComponent from './maincomponent.jsx'
const DataContainer = Container('maincomponent', MainComponent)

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
