import React from 'react'

import ProjectActions from '../actions/project_actions'

export default ({taskid, projects}) => (
  <ul>
    <li>{taskid}</li>
    {projects.map(project => (
      <li key={project._id} onClick={ ProjectActions.assignProject } >{project.description}</li>
    ))}
  </ul>
)
