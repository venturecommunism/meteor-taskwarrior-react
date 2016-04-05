import React from 'react'

import FeedItem from './feeditem.jsx'

import Container from '../containers/container'
import Composer from '../data/composer'
import Query from '../state/filterprojectsquery'
import ProjectSelector from './projectselector.jsx'
const ProjectSelectorContainer = Container(Composer, Query, ProjectSelector) 

export default ({data}) => (
  <div className='feed-wrapper'>
    <h3>Tasks collection</h3>
    <ul>
      {data.map(task => (
        <li key={task._id}>
          <FeedItem task={task} />
          <ProjectSelectorContainer taskid={task._id} />
        </li>
      ))}
    </ul>

    <button className='more-btn'> 
      Load More
    </button>
  </div>
)
