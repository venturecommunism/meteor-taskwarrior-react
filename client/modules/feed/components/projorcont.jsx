import React from 'react'
import FeedDomain from '../actions/feed_domain.jsx'

//import ProjOrCont from './projorcont.jsx'

export default ({task}) => (
  <div key={task._id} className='project-or-context'>
    {/* name has to be the same for buttons to toggle between them */}
    <input className={task._id} type="radio" name="setProjectOrContext" value='project' onChange={FeedDomain.setProjectOrContext} />&nbsp;Project&nbsp;
    <input className={task._id} type="radio" name="setProjectOrContext" value="context" onChange={FeedDomain.setProjectOrContext} />&nbsp;Context<br />
  </div>
)
