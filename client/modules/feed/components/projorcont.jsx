import React from 'react'

export default ({ params, actions }) => (
  <div key={ params._id } className='project-or-context'>
    {/* name has to be the same for buttons to toggle between them */}
    <input type="radio" name="setProjectOrContext" onChange={ preventDefault(actions.setProjectOrContext, "project", params._id) } />&nbsp;Project&nbsp;
    <input type="radio" name="setProjectOrContext" onChange={ preventDefault(actions.setProjectOrContext, "context", params._id) } />&nbsp;Context<br />

  </div>
)
