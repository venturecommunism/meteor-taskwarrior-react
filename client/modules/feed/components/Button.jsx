import React from 'react';

export default ({task, buttontest}) => (
  <div key={task._id} className="universal-button">

    <div onClick={buttontest}>Click</div> <br />
  </div>
)
