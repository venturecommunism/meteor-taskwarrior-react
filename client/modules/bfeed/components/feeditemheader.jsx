import React from 'react'

import ProjCont from './projorcont.jsx'
import NewContainer from '../../core/containers/newcontainer'
const ProjContContainer = NewContainer('projorcont', ProjCont)

export default ({data}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{data.username}</div>
    </div>

    <ProjContContainer params={data} />

  </div>
);
