import React from 'react'
import FeedActions from '../actions/feed_actions'
import FeedDomain from '../actions/feed_domain.jsx'

export default ({projects}) => (
  <div className='params-example'>

    <ul>
      {projects.map(task => (
        <li key={task._id}>
          <div className='feed-item'>
            <div className='feed-item-description'>
              {task.description}
            </div>
            <div className='feed-item-entry'>
              {task.entry}
            </div>
            <div className='feed-item-status'>
              {task.status}
            </div>
            <div className='feed-item-uuid'>
              {task.uuid}
            </div>
          </div>
        </li>
      ))}
    </ul>


    <button onClick={ FeedActions.filterByProjects }>
      Projects
    </button>

  </div>
)

