import React from 'react'
const Bottom = ({ toggleOverlay }) => (
    <div className="sidebar--bottom plm prm">
        <button onClick={ toggleOverlay.bind(null, 'folder' )}
            className="btn btn--full bg-lightest-green white-90 sidebar--bottom_button f5 bold tracked">
            maak map
        </button>
        <button onClick={ toggleOverlay.bind(null, 'doc') }
            className="btn btn--full bg-lightest-green white-90 sidebar--bottom_button f5 bold tracked">
            upload doc
        </button>
    </div>
)

export default Bottom