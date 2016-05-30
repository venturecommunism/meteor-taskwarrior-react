import React from 'react'

import Container from '../../core/containers/container'

import Button from './button.jsx'
const ButtonContainer = Container('projectselector', Button)

export default ({taskid, data, actions}) => (
  <div>
  <ul id={taskid}>
    {data.map(project => (
      <li id={project._id} key={project._id} onClick={ actions.assignProject } >{project.description}</li>
    ))}
    <span style={{color:'red'}}><li><ButtonContainer buttontext="Settle here" /></li></span>
  </ul>
  </div>
)
