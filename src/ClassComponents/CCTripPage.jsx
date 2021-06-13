import React, { Component } from 'react'
import { AiOutlineRollback } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Form, Button, DropdownButton, Dropdown, ButtonGroup, ProgressBar, CardColumns, Modal } from 'react-bootstrap';
import MediaCard from '../FunctionComponents/FCardMaterialUi';
import MediaCard2 from '../FunctionComponents/FCardMaterialUi2';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FCSimpleBottomNavigation from '../FunctionComponents/FCSimpleBottomNavigation';
import { Container, Row, Col, Table } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import FCEditList from '../FunctionComponents/FCEditList';
import Weathers from '../Element/EWeather';



const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));


<link rel="stylesheet/less" type="text/css" href="styles.less" />



export default class CCTripPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            setValue: '',
            TripsByName: [],
            opacity: 0.6,
            disabled: true,
            showComponent: false,
            showChecklistComponent: false,
            Check1: '',
            Check2: '',
            Check3: '',
            Check4: '',
            Check5: '',
            Check6: '',


        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._EditListButtonClick = this._EditListButtonClick.bind(this);


    };




    componentDidMount = () => {
        let apiUrl = `http://localhost:53281/api/NewTrip/getripByName/${localStorage.getItem('trip_name')}/`
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // console.log("The trip for this trip name -  trips data from sql")
                // console.log(data);
                data.forEach((item) => {
                    console.log("item us");
                    console.log(item.Date);
                    this.state.TripsByName.push({ Trip: item });
                    this.setState({ name: item.Name, date: item.Date, email: item.Admin_email, area: item.Area, matchper: item.MatchPercent, numofnight: item.NumOfnights, participants: item.Participants, time: item.Time, vehicle: item.VehicleType, children: item.WithChildren });
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        console.log("this.state.TripsByName....");
        console.log(this.state.TripsByName);
        console.log(this.state.tempName)
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    _EditListButtonClick() {
        this.setState({
            showChecklistComponent: true,
        });
    }

    _closeEditlist() {
        this.setState({
            showChecklistComponent: false,
        });
    }

    
    CloseEditList = () => {
        this.setState({
            showChecklistComponent:false
        });
    }


    test = () => {
        this.setState({ tempName: this.state.TripsByName[0].Trip.Name });
        console.log("this is temp name");
        console.log(this.state.tempName)
        alert(this.state.tempName);
    }

    backbtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Press Yes to return Main Pgae",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                window.location.href = "http://localhost:3000/main_menu_page"
                // window.location.href = "http://proj.ruppin.ac.il/igroup47/prod/"       
            }
        })
    }

    render() {

        return (
            <div style={{ backgroundColor: '#1d21243b', height: '100%' }}>
                {/* <h1>{this.state.TripsByName[0].Trip.Name}</h1> */}

                <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div>
                {Weathers}

                <div>

                    <div><br></br>
                        <h4 style={{ fontWeight: "bold", width: '90%', boxShadow: '0px 50px 150px 10px yellow', fontSize: '30px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                            Trip Name : {this.state.name}
                        </h4>


                        <nav class="navbar navbar-inverse" style={{ backgroundColor: 'grey' }}>

                            <Button variant="info" onClick={this._onButtonClick}>Info</Button>
                            <Button size="sm" variant="warning">Weather</Button>
                            <Button size="sm" >Sign in</Button>
                            <Button size="sm" variant="secondary">Sign in</Button>
                        </nav>
                        {/* <h1>{this.state.name}</h1> */}

                        {/* <FCSimpleBottomNavigation /> */}
                        <div><ProgressBar animated striped variant="success" now={90} label="Participants Capacity" /></div>
                        <br></br>
                        <Container>
                            <Row>
                                <Col style={{ backgroundColor: 'yellow', borderRadius: '10px' }}>
                                    <h1></h1>
                                    <h4 style={{ fontWeight: "bold", marginRight: '30px', boxShadow: '0px 50px 150px 10px yellow', fontSize: '20px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                                        Travel Checklist
                                    </h4>
                                    <Table striped bordered hover variant="dark" style={{ opacity: this.state.opacity }}>
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
                                                    <select id="dropdown" disabled={this.state.disabled}  /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                                        <option value="Will be the trip Participants">Affable</option>
                                                        <option value="Will be the trip Participants">Troglodyte</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h5>Water</h5>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                                        <option value="Will be the trip Participants">Yoni</option>
                                                        <option value="Will be the trip Participants">Troglodyte</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h5>Tent</h5>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} /*onChange={(e) => this.setState({ q9: e.target.value })}*/>
                                                        <option value="Will be the trip Participants">Yoni</option>
                                                        <option value="Will be the trip Participants">Troglodyte</option>
                                                    </select>
                                                </td>
                                            </tr>

                                        </tbody>

                                    </Table>
                                    {/* <Button variant="info" size="md" onClick={this.test} className="edit">שדגיח</Button> */}
                                    {/* <FCEditList dataFromTripPage={this.state.TripsByName} /> */}
                                    <Button variant="info" onClick={this._EditListButtonClick}>Info</Button>

                                    <h1></h1>
                                </Col>
                                <Col>2 of 2</Col>
                            </Row>

                        </Container>
                    </div><br></br>


                    {/* Showing Checklist  */}
                    {this.state.showChecklistComponent ?
                        <Modal
                            show={this.state.showChecklistComponent}
                            onHide={this.CloseEditList}
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
                                                <select onChange={(e) => this.setState({ Check1: e.target.value })}>
                                                    <option value={this.state.Check1}></option>
                                                    <option value="1">Affable</option>
                                                    <option value="2">Troglodyte</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Gas</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check2: e.target.value })}>
                                                    <option value={this.state.Check2}></option>
                                                    <option value="Will be the trip Participants">Yoni</option>
                                                    <option value="Will be the trip Participants">Troglodyte</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Tent</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check3: e.target.value })}>
                                                    <option value={this.state.Check3}></option>
                                                    <option value="Will be the trip Participants">Yoni</option>
                                                    <option value="Will be the trip Participants">Troglodyte</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Kitchen supplies</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check4: e.target.value })}>
                                                    <option value={this.state.Check4}></option>
                                                    <option value="Will be the trip Participants">Affable</option>
                                                    <option value="Will be the trip Participants">Troglodyte</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Emergency and hygiene supplies</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check5: e.target.value })}>
                                                    <option value={this.state.Check5}></option>
                                                    <option value="Will be the trip Participants">Yoni</option>
                                                    <option value="Will be the trip Participants">Troglodyte</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Small repair kit</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check6: e.target.value })}>
                                                    <option value={this.state.Check6}></option>
                                                    <option value="Will be the trip Participants">Yoni</option>
                                                    <option value="Will be the trip Participants">Troglodyte</option>
                                                </select>
                                            </td>
                                        </tr>


                                    </tbody>

                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={()=> this.setState({ showChecklistComponent: false })}  >Close</Button>
                                <Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button>
                            </Modal.Footer>
                        </Modal> : null
                    }




                    <br></br><br></br>

                    {/* Showing Trip Card */}
                    {this.state.showComponent ?

                        <CardColumns>
                            {
                                // {this.state.AllTripsBYEmail?.length=0=>{<p>You dont have any </p>}}                    
                                this.state.TripsByName?.length > 0 &&
                                this.state.TripsByName?.map((item, key) => <MediaCard2 name={this.state.name} key={key} date={this.state.date} time={this.state.time} participants={this.state.participants} area={this.state.area} />)
                            }
                        </CardColumns> : null
                    }


                    <Button variant="secondary" size="sm" onClick={this.test} className="but"> check what print </Button>
                </div >

            </div>

        )
    }
}
