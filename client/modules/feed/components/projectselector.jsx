import React from 'react'

import ProjectActions from '../actions/project_actions'

import Container from '../containers/container'
import Composer from '../data/composer'
import Query from '../state/projectselector'
import Button from './button.jsx'
const ButtonContainer = Container(Composer, Query, Button)

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
