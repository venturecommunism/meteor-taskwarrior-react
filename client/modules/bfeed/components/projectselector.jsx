import React from 'react'

import ActionsMapper from '../../core/containers/actionsmapper'

import Button from './button.jsx'
const ButtonContainer = ActionsMapper('projectselector', Button)

export default ({taskid, data, actions}) => (
  <div>
  <ul id={taskid}>
    {data.map(project => (
      <li id={project._id} key={project._id} onClick={ actions.assignProject } >{project.description}</li>
    ))}
    <span style={{color:'red'}}><li><ButtonContainer data={taskid} buttontext="Settle here" /></li></span>
  </ul>
  </div>
)
