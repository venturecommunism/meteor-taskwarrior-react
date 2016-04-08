import React from 'react'
const MainContent = ({ content }) => (
    <div className="main-container__outer">
        { content() }
    </div>
)
export default MainContent

