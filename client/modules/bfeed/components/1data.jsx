import React from 'react';

import ActionsMapper from '../../core/containers/actionsmapper'
import Feed from './feed.jsx'

const FeedContainer = ActionsMapper('feed', Feed)
//Feed used to be wrapped in a standard container with 'feed' as an argument

export default ({data, actions}) => (
  <div className="row">
    <div className="col-md-3" style={{"backgroundColor": "gray"}}>
   {/*   <SideBarContainer /> */}
    </div>
    <div className="col-md-9">
{/*
      <CalendarContainer />
      <CreateTaskContainer />
      <PreviousCalendarContainer />
      <OverDueContainer />
*/}
      <FeedContainer data={data.feed} />
    </div>
  </div>
)
