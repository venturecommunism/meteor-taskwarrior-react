import React from 'react'

import ProjCont from './projorcont.jsx'
import ActionsMapper from '../../core/containers/actionsmapper'
const ProjContContainer = ActionsMapper('projorcont', ProjCont)

import Timepicker from './timepicker.jsx'
const CalendarContainer = ActionsMapper ('timepicker', Timepicker)

export default ({data, ...date}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{data.username}</div>
    </div>

    { data.workflow && data.workflow == '/tw-ui/0.inbox' && <ProjContContainer params={data} /> }
    { data.workflow && data.workflow == '/tw-ui/1.topprojectinbox' && data.type == 'project' && 'Process this project' }
    { data.workflow && data.workflow == '/tw-ui/3.projectselected' && data.type == 'project' && 'Unlock this project' }
    { data.workflow && data.workflow == '/tw-ui/4.topcontextinbox' && data.type == 'context' && 'Process this context' }
    { data.workflow && data.due && 'Datepicker' }
    { !data.workflow && <div><img src="http://downloadicons.net/sites/default/files/error-red-error-icon-29051.png" />{Object.keys(data)}</div> }
    { <CalendarContainer {...date} id={data._id} due={data.due} format="YYYY-MM-DD HH:mm:ss" /> }

  </div>
);
