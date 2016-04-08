import React from 'react'
const SideMenuItem = ({ name, currentPage, gotoRoute }) => (
    <div onClick={ () => gotoRoute(name) }
        className="f4 side_menu_item_outer--item">
        {
            name === currentPage ?
                <div className="white-100 bold menu-item menu-item__active">{ name }</div> :
                <div className="white-90 menu-item">{ name }</div>
        }
    </div>
)

export default SideMenuItem