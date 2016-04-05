import React from 'react'
import FeedActions from '../actions/feed_actions'
import FeedDomain from '../actions/feed_domain'

import Container from '../containers/container'
import Composer from '../data/composer'
import Query from '../state/parentprojectorcontext'
import Button from './button.jsx'
const UpOneContainer = Container(Composer, Query, Button)

import currentProjectOrContextComposer from '../data/currentprojectorcontext'
import FeedItem from './feeditem.jsx'
const FeedItemContainer = currentProjectOrContextComposer(FeedItem)

export default ({data, flags}) => (
  <div className='params-example'>
    <button className={ flags.clearall } onClick={ FeedActions.clearFilters }>
      Inbox
    </button>

    <button className={ flags.project } onClick={ FeedActions.filterAllProjects }>
      Projects
    </button>

    <button className={ flags.context } onClick={ FeedActions.filterAllContexts }>
      Contexts
    </button>

    <button className={ flags.definesome } onClick={ FeedActions.filterDefineSomeWork }>
      Define Some Work
    </button>

    <button className={ flags.dodefined } onClick={ FeedActions.filterDoDefinedWork }>
      Do Defined Work
    </button>

    <br /><br />

    <UpOneContainer />

    <FeedItemContainer />

    <ul>
      {data.map(task => (
        <li key={task._id}>
          <div className='feed-item'>
            <div className='feed-item-description' onClick={ FeedActions.filterByProject }>
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

