import React from 'react'

import ProjectSelector from './projectselector.jsx'
import FeedItem from './feeditem.jsx'

export default ({collection, filterprojects}) => (
  <div className='feed-wrapper'>
    <h3>Tasks collection</h3>
    <ul>
      {collection.map(task => (
        <li key={task._id}>
          <FeedItem task={task} />
          <ProjectSelector taskid={task._id} projects={filterprojects} />
        </li>
      ))}
    </ul>

    <button className='more-btn'> 
      Load More
    </button>
  </div>
);

/*
FeedItem.propTypes = {
  description: React.PropTypes.string.isRequired,
  taskcomments: React.PropTypes.array.isRequired,
  uuid: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
  entry: React.PropTypes.string.isRequired,
};

export default FeedItem
*/

