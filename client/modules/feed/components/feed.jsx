import React from 'react'

import FeedItem from './feeditem.jsx'

import ActionsMapper from '../containers/actionsmapper'
import ProjectSelector from './projectselector.jsx'

import Button from './button.jsx'

const TrashButton = ActionsMapper('trashbutton', Button)
const ArchiveButton = ActionsMapper('archivebutton', Button)
const SomedayMaybeButton = ActionsMapper('somedaymaybebutton', Button)

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
          <TrashButton data={task} taskid={task._id} />
          <ArchiveButton data={task} taskid={task._id} />
          <ProjectSelectorContainer data={data.filterprojects} task={task} /> 
          <SomedayMaybeButton data={task} taskid={task._id} />
        </li>
      ))}
    </ul>

    <button className='more-btn'> 
      Load More
    </button>
  </div>
)
