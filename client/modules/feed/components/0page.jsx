import React from 'react';

import ApolloContainer from '../../apollo/containers/container'

import PreviousComponent from '../../apollo/components/previouscalendar.jsx'
//const PreviousCalendarContainer = ApolloContainer(PreviousComponent)

import OverDueComponent from '../../apollo/components/overduecalendar.jsx'
//const OverDueContainer = ApolloContainer(OverDueComponent)

import CalendarComponent from '../../apollo/components/calendar.jsx'
const CalendarContainer = ApolloContainer(CalendarComponent)

import Container from '../../core/containers/container'
import NewContainer from '../../core/containers/newcontainer'
import Feed from './feed.jsx'

import CreateTask from './createtask.jsx'
const CreateTaskContainer = NewContainer('createtask', CreateTask)

const FeedContainer = NewContainer('feed', Feed)
const PreviousCalendarContainer = NewContainer('previouscalendar', Feed)

import SideBar from './sidebar.jsx'
const SideBarContainer = NewContainer('sidebar', SideBar)

const OverDueContainer = NewContainer('overdue', Feed)

const CalendarNewContainer = NewContainer('calendar', Feed)

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3" style={{"backgroundColor": "gray"}}>
            <SideBarContainer />
          </div>
          <div className="col-md-9">
            <CalendarNewContainer />
            <CreateTaskContainer />
            <PreviousCalendarContainer />
            <OverDueContainer />
            <FeedContainer />
            <CalendarContainer />
          </div>
        </div>
      </div>
    );
  }
}
