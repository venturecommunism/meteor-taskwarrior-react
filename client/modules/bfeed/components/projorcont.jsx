import React from 'react'

export default ({ params, actions }) => (
  <div key={ params._id } className='project-or-context'>
    {/* name has to be the same for buttons to toggle between them */}
    <input className={ params._id } type="radio" name="setProjectOrContext" value="project" onChange={ actions.setProjectOrContextt } />&nbsp;Project&nbsp;
    <input className={ params._id } type="radio" name="setProjectOrContext" value="context" onChange={ actions.setProjectOrContext } />&nbsp;Context<br />
  </div>
)
