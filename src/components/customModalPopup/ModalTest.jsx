import React, { useState } from 'react';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import './modal.css';


const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleOpenModalPopup() {
        setShowModalPopup(true);
    }

    function handleCloseModalPopup() {
        setShowModalPopup(false);
    }

    return (
        <div className='container'>
            <button className='modal-button' onClick={handleOpenModalPopup}>Open Modal Popup</button>
            {showModalPopup && <Modal
                id={'custom-id'}
                handleCloseModalPopup={handleCloseModalPopup}
                header={<ModalHeader />}
                body={<ModalBody />}
                footer={<ModalFooter />}
            />
            }
        </div>
    )
}

export default ModalTest;