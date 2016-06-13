import React from 'react'

import ActionsMapper from '../../core/containers/actionsmapper'

import Button from './button.jsx'
const ButtonContainer = ActionsMapper('projectselector', Button)

export default ({...queryParams, data, actions}) => (
  <div>
  <ul id={queryParams.projects}>
    {data.map(project => (
      <li id={project._id} key={project._id} onClick={ actions.assignProject } >{project.description}</li>
    ))}
    <span style={{color:'red'}}><li><ButtonContainer {...queryParams} buttontext="Settle here" /></li></span>
  </ul>
  </div>
)
