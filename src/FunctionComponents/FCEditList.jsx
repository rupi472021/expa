import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
// import EquipList from '../Element/ETable';
import { Container, Row, Col, Table } from 'reactstrap';
import TextField from '@material-ui/core/TextField';



export default function FCEditList(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
                    <Table striped bordered hover variant="dark" >

                        <tbody>
                        <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus /></td>

                            <tr>
                                <h5>Water</h5>
                                <td>
                                    <select id="dropdown"   /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                        <option value="Will be the trip Participants">Affable</option>
                                        <option value="Will be the trip Participants">Troglodyte</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                <h5>Gas</h5>
                                <td>
                                    <select id="dropdown" /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                        <option value="Will be the trip Participants">Yoni</option>
                                        <option value="Will be the trip Participants">Troglodyte</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                <h5>Tent</h5>
                                <td>
                                    <select id="dropdown" /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                        <option value="Will be the trip Participants">Yoni</option>
                                        <option value="Will be the trip Participants">Troglodyte</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                <h5>Kitchen supplies</h5>
                                <td>
                                    <select id="dropdown"   /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                        <option value="Will be the trip Participants">Affable</option>
                                        <option value="Will be the trip Participants">Troglodyte</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                <h5>Emergency and hygiene supplies</h5>
                                <td>
                                    <select id="dropdown" /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                        <option value="Will be the trip Participants">Yoni</option>
                                        <option value="Will be the trip Participants">Troglodyte</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                <h5>Small repair kit</h5>
                                <td>
                                    <select id="dropdown" /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                        <option value="Will be the trip Participants">Yoni</option>
                                        <option value="Will be the trip Participants">Troglodyte</option>
                                    </select>
                                </td>
                            </tr>
                   

                        </tbody>

                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" >Close</Button> */}
                    <Button style={{alignItems:'center'}} variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


