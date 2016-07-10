import React from 'react'

import FeedItem from './feeditem.jsx'

import ActionsMapper from '../../core/containers/actionsmapper'
import ProjectSelector from './projectselector.jsx'

const ProjectSelectorContainer = ActionsMapper('filterprojects', ProjectSelector)
//ProjectSelector used to be wrapped in a standard container with 'filterprojects' as an argument

export default ({data, title, ...date}) => (
  <div className='feed-wrapper'>
    <h3>{title}</h3>
    <ul>
      {data.map(task => (
        <li key={task._id}>
          <FeedItem data={task} {...date} />
          <div>task: {task._id}</div>
          <ProjectSelectorContainer data={data.filterprojects} task={task} /> 
        </li>
      ))}
    </ul>

    <button className='more-btn'> 
      Load More
    </button>
  </div>
)
