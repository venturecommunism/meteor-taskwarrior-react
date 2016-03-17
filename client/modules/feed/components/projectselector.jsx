import React from 'react'

import ProjectActions from '../actions/project_actions'

export default ({taskid, projects}) => (
  <ul id={taskid}>
    {projects.map(project => (
      <li id={project._id} key={project._id} onClick={ ProjectActions.assignProject } >{project.description}</li>
    ))}
  </ul>
)
