import React from 'react'

import ActionsMapper from '../../core/containers/actionsmapper'

import Button from './button.jsx'
const ButtonContainer = ActionsMapper('projectselector', Button)

export default ({...queryParams, data, actions, task}) => (
  <div>
    <div>task2: {task._id}</div>
  <ul id={queryParams.projects}>
    {data.map(project => (
      <li id={project._id} key={project._id} onClick={ actions.assignProject } >{project.description}</li>
    ))}
    <span style={{color:'red'}}><li><ButtonContainer taskid={task._id} {...queryParams} buttontext="Settle here" /></li></span>
  </ul>
  </div>
)
