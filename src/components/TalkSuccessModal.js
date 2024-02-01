import React from 'react';
import closeModalImg from "../assets/images/x.svg";
import envelopeImg from "../assets/images/envelope.svg";

const TalkSuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <img src={closeModalImg} alt="Close" />
                </button>
                <div className="wrapper">
                    <img src={envelopeImg} alt="envelope" />
                    <h3 className='fs-h3'>Thank you</h3>
                    <span className='fs-s2'>We will contact you as soon as possible</span>
                </div>
            </div>
        </div>
    );
};

export default TalkSuccessModal;