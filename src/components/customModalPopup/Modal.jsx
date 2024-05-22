import React from 'react';

const Modal = ({ id, header, body, footer, handleCloseModalPopup }) => {
    return (
        <div id={id || 'Modal'} className='modal'>
            <div className='modal-content'>
                <div className='modal-icon-container'>
                    <span onClick={handleCloseModalPopup} className='close-modal-icon'>&times;</span>
                </div>
                <div className='header'>
                    <h2>{header ? header : 'Header'}</h2>
                </div>
                <div className='body'>
                    {
                        body
                            ? body
                            : <div>
                                <p>This is the modal body</p>
                            </div>
                    }
                </div>
                <div className='footer'>
                    {
                        <h2>{footer ? footer : 'This is the footer'}</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal;