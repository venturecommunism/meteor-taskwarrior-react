import React from 'react'

import Container from '../../core/containers/container'

import Button from './button.jsx'
const UpOneContainer = Container('parentprojectorcontext', Button)

import SimpleFeed from './simplefeed.jsx'
const CurrentProjOrContContainer = Container('projectselector', SimpleFeed)

export default ({data, actions }) => (
  <div className='params-example'>
    <button className={ actions.flags().clearall } onClick={ actions.clearFilters }>
      Inbox
    </button>

    <button className={ actions.flags().project } onClick={ actions.filterAllProjects }>
      Projects
    </button>

    <button className={ actions.flags().context } onClick={ actions.filterAllContexts }>
      Contexts
    </button>

    <button className={ actions.flags().definesome } onClick={ actions.filterDefineSomeWork }>
      Define Some Work
    </button>

    <button className={ actions.flags().dodefined } onClick={ actions.filterDoDefinedWork }>
      Do Defined Work
    </button>

    <br /><br />

    <UpOneContainer />

    <CurrentProjOrContContainer />

    <ul>
      {data.map(task => (
        <li key={task._id}>
          <div className='feed-item'>
            <div className='feed-item-description' onClick={ actions.selectedProject }>
              <span id={task._id} style={{ color: 'red', }}>{task.description}</span>
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

  </div>
)

