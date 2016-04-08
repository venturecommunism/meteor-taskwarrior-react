import React from 'react'
const ContainerCenterContentFull = ({ content }) => (
    <div className="container_center_content_full bg-lime-gradient">
        { content() }
    </div>
)

export default ContainerCenterContentFull