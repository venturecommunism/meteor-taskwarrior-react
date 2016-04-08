import React from 'react'
import SideMenuItem from './SidemenuItem.jsx'
import SidemenuTop from './SidemenuProfile.jsx'
//require('../styles.css')
//import styles from '../styles.css'
const SideMenuList = ({ enabled, currentPage, gotoRoute }) => {
    return (
        <div>
            <div className='sidemenu__header ttu tracked-l'>
                <SidemenuTop />
            </div>
            {
                ['Home', 'Kenniscentrum', 'Contacten', 'Groepen', 'Nieuws', 'Agenda'].map((item, index) => {
                    return (
                        <SideMenuItem
                            gotoRoute={gotoRoute}
                            name={item}
                            currentPage={currentPage}
                            enabled={enabled}
                            key={'sidemenu-' + index}/>)
                })
            }
        </div>
    )
}
SideMenuList.defaultProps ={
    currentPage: 'home'
}
export default SideMenuList
