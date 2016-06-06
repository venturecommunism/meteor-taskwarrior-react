import React from 'react'

import FeedItem from './feeditem.jsx'

import ActionsMapper from '../../core/containers/actionsmapper'
import ProjectSelector from './projectselector.jsx'

const ProjectSelectorContainer = ActionsMapper('filterprojects', ProjectSelector)
//ProjectSelector used to be wrapped in a standard container with 'filterprojects' as an argument

export default ({data}) => (
  <div className='feed-wrapper'>
    <h3>Tasks collection</h3>
    <ul>
      {data.map(task => (
        <li key={task._id}>
          <FeedItem data={task} />
          <ProjectSelectorContainer data={data.filterprojects} taskid={task._id} /> 
        </li>
      ))}
    </ul>

    <button className='more-btn'> 
      Load More
    </button>
  </div>
)
