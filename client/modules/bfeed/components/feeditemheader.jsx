import React from 'react'

import ProjCont from './projorcont.jsx'
import Container from '../../core/containers/container'
const ProjContContainer = Container('projorcont', ProjCont)

export default ({data}) => (
  <div className="feed-item__header">
    <div className="avatar" />

    <div className='name-date'>
      <div className="name">{data.username}</div>
    </div>

    <ProjContContainer params={data} />

  </div>
);
