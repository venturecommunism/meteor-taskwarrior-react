import React from 'react'
//import './styles.css'
const ModalBottom = ({onCancel, isLoading, onPositive, buttonText}) => (
    <div className="modal-bottom bg-black-05 pam">
        <button
            disabled={isLoading}
            onClick={onPositive}
            className="modal-bottom--button modal-bottom--button_positive f5 mls">
            {
                !isLoading ?
                    buttonText :
                    'AANMAKEN..'
            }
        </button>
        <button
            disabled={isLoading}
            onClick={onCancel}
            className="f5 modal-bottom--button modal-bottom--button_negative">
            annuleer
        </button>

    </div>
)

export default ModalBottom
