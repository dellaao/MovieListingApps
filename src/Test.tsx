import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from 'react-bootstrap/Button';

const Test = () => {
    const values = [true,'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint:any) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
        {values.map((v, idx) => (
            <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
            Full screen
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
        ))}
        {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal> */}
        </>
    );
}

export default Test