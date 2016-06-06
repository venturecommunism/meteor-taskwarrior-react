import React from 'react'

import ProjCont from './projorcont.jsx'
import ActionsMapper from '../../core/containers/actionsmapper'
const ProjContContainer = ActionsMapper('projorcont', ProjCont)

export default ({data}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{data.username}</div>
    </div>

    <ProjContContainer params={data} />

  </div>
);
