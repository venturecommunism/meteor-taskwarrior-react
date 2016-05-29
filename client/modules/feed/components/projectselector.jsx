import React from 'react'

import NewContainer from '../../core/containers/newcontainer'

import Button from './button.jsx'
const ButtonContainer = NewContainer('projectselector', Button)

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
