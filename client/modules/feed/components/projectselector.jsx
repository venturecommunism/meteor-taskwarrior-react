import React from 'react'

import ProjectActions from '../actions/project_actions'

import dataComposer from '../data/projectselector'
import ButtonComponent from './button.jsx'
const ButtonContainer = dataComposer(ButtonComponent)

export default ({taskid, data}) => (
  <div>
  <ul id={taskid}>
    {data.map(project => (
      <li id={project._id} key={project._id} onClick={ ProjectActions.assignProject } >{project.description}</li>
    ))}
    <span style={{color:'red'}}><li><ButtonContainer buttontext="Settle here" /></li></span>
  </ul>
  </div>
)
