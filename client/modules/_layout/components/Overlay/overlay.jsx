import React from 'react'
import OverlayBottom from './overlay_bottom.jsx'
import OverlayHeader from './overlay_header.jsx'
import { Modal, Transition } from 'react-overlays'

//import styles from './styles.css'

const Overlay = ({ children, toggleOverlay, buttonText, onPositive, isOverlayOpen, isLoading, overlayTitle }) => {
     return (
         <Modal
             className='modal-container'
             aria-labelledby='modal-label'
             backdropClassName="modal-backdrop"
             show={isOverlayOpen}
             onHide={toggleOverlay}>
             <div className="dialog-style">
                 <OverlayHeader title={ overlayTitle }/>
                 { children }
                 <OverlayBottom
                     isLoading={isLoading}
                     onPositive={onPositive}
                     onCancel={toggleOverlay}
                     buttonText={buttonText}/>
             </div>
         </Modal>
     )
}

Overlay.defaultProps = {
    isModalOpen: false
}

export default Overlay
