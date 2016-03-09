import React from 'react'
import FeedActions from '../actions/feed_actions'
import FeedDomain from '../actions/feed_domain.jsx'

export default ({projects}) => (
  <div className='params-example'>

    <ul>
      {projects.map(task => (
        <li key={task._id}>
          <div className='feed-item'>
            <div className='feed-item-description' onClick={ FeedActions.filterByProject }>
              <span style={{ color: 'red', }}>{task.description}</span>
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


    <button onClick={ FeedActions.filterAllProjects }>
      Projects
    </button>

    <button onClick={ FeedActions.filterAllContexts }>
      Contexts
    </button>

    <button onClick={ FeedActions.filterDefineSomeWork }>
      Define Some Work
    </button>

    <button onClick={ FeedActions.filterDoDefinedWork }>
      Do Defined Work
    </button>


  </div>
)

