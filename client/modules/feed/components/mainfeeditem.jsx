import React from 'react'

import FeedItemHeader from './feeditemheader.jsx'
import FeedItemFooter from './feeditemfooter.jsx'

import Button from './button.jsx'
import ActionsMapper from '../containers/actionsmapper'
const BackOneWorkflowButtonContainer = ActionsMapper('backoneworkflow', Button)

export default ({...queryParams, data, ...date}) => (
  <div className='feed-item' style={{"background": "pink"}}>
    <div className='feed-item-description'>
      <h2>{data.description}</h2>
    </div>
    <BackOneWorkflowButtonContainer data={data} />
    <div className='feed-item-entry'>
      {data.entry}
    </div>
    <div className='feed-item-status'>
      {data.status}
    </div>
    <div className='feed-item-uuid'>
      {data.uuid}
    </div>
    <FeedItemFooter data={data} />
  </div>
)
