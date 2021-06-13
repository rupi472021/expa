import React from 'react';
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
// import EquipList from '../Element/ETable';
import { Container, Row, Col, Table } from 'reactstrap';
import TextField from '@material-ui/core/TextField';



export default function FCTripCardSpec() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit List
             </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Travel Checklist</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" >Close</Button> */}
                    <Button style={{alignItems:'center'}} variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}



import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
// import EquipList from '../Element/ETable';
import { Container, Row, Col, Table } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

