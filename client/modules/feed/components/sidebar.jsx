import React from 'react'

import ActionsMapper from '../../core/containers/actionsmapper'

import Button from './button.jsx'
const UpOneContainer = ActionsMapper('parentprojectorcontext', Button)

import SimpleFeed from './simplefeed.jsx'
const CurrentProjOrContContainer = ActionsMapper('projectselector', SimpleFeed)

export default ({...queryParams, data, actions }) => (
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

    <UpOneContainer {...queryParams} />

    <CurrentProjOrContContainer data={data.currentprojorcont} />

    <ul>
      {data.map(task => (
        <li key={task._id}>
          <div className='feed-item'>
            <div className='feed-item-description' onClick={ actions.selectedProjectOrContext }>
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

