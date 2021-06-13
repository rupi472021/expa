
import React from 'react';
import { Container, Row, Col, Table, } from 'reactstrap';
import { Button } from 'react-bootstrap';


const EquipList =
    <div>
        <center>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: 'yellow', borderRadius: '10px' }}>
                        <h1></h1>
                        <h4 style={{ fontWeight: "bold", marginRight: '30px', boxShadow: '0px 50px 150px 10px yellow', fontSize: '20px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                            Equip List
                                        </h4>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                {/* <tr>
                                                <th>Who Bring What </th>
                                            </tr> */}
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                    <h5>Gas</h5>
                                    <td>
                                        <select id="dropdown" /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                            <option value="Will be the trip Participants">Affable</option>
                                            <option value="Will be the trip Participants">Troglodyte</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                    <h5>Water</h5>
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
                                        <select id="dropdown"  /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                            <option value="Will be the trip Participants">Yoni</option>
                                            <option value="Will be the trip Participants">Troglodyte</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                    <h5>Gas</h5>
                                    <td>
                                        <select id="dropdown" /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                            <option value="Will be the trip Participants">Affable</option>
                                            <option value="Will be the trip Participants">Troglodyte</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                    <h5>Water</h5>
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
                                        <select id="dropdown"  /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                            <option value="Will be the trip Participants">Yoni</option>
                                            <option value="Will be the trip Participants">Troglodyte</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="info" size="md"  className="edit"> Edit List </Button>
                        <h1></h1>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>

            </Container>
        </center>
    </div>;

export default EquipList; //לייצא אותו לקובץ app.js