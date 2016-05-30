import React from 'react'

import FeedItem from './feeditem.jsx'

import NewContainer from '../../core/containers/newcontainer'
import ProjectSelector from './projectselector.jsx'
const ProjectSelectorContainer = NewContainer('filterprojects', ProjectSelector) 

export default ({data}) => (
  <div className='feed-wrapper'>
    <h3>Tasks collection</h3>
    <ul>
      {data.map(task => (
        <li key={task._id}>
          <FeedItem data={task} />
          <ProjectSelectorContainer taskid={task._id} />
        </li>
      ))}
    </ul>

    <button className='more-btn'> 
      Load More
    </button>
  </div>
)
