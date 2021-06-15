import React, { Component } from 'react'
import { AiOutlineRollback } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Form, Button, DropdownButton, Dropdown, ButtonGroup, ProgressBar, CardColumns, Modal, Card } from 'react-bootstrap';
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
//import Weathers from '../Element/EWeather';
import Select from '@material-ui/core/Select';
import { BiCamera } from "react-icons/bi";




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
            ParticipantsArray: [],
            opacity: 0.6,
            disabled: true,
            showComponent: false,
            showChecklistComponent: false,
            showParticipantsComponent: false,
            showWeatherComponent: false,
            // Check1: '',
            // Check2: '',
            // Check3: '',
            Check4: '',
            Check5: '',
            Check6: '',
            NumOfPartners: 1,

        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._EditListButtonClick = this._EditListButtonClick.bind(this);
        this._ViewParticipantsButtonClick = this._ViewParticipantsButtonClick.bind(this);
        this._onWeatherButtonClick = this._onWeatherButtonClick.bind(this);


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
        console.log(this.state.tempName);

        this.getParticipantTripDate();
    }

    getParticipantTripDate() {

        let apiUrl = `http://localhost:53281/api/User/getParticiByName/${localStorage.getItem('trip_name')}/`
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // console.log("The trip for this trip name -  trips data from sql")
                console.log(data);
                data.forEach((item) => {
                    // console.log("item us");
                    // console.log(item.Date);
                    this.state.ParticipantsArray.push({ Partner: item });
                    this.setState({ email: item.Email, fname: item.Fname, lname: item.Lname, image: item.Image });
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        console.log("this.state.ParticipantsArray....");
        console.log(this.state.ParticipantsArray);

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

    _ViewParticipantsButtonClick() {
        this.setState({
            showParticipantsComponent: true,
        });
    }

    _onWeatherButtonClick() {
        this.setState({
            showWeatherComponent: true,
        });
    }




    CloseEditList = () => {
        this.setState({
            showChecklistComponent: false,
            showComponent: false,
            showParticipantsComponent: false,
            showWeatherComponent: false,
        });
    }


    test = () => {

        alert(this.state.ParticipantsArray.length);

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
                // localStorage.clear();
                window.location.href = "http://localhost:3000/main_menu_page"
                // window.location.href = "http://proj.ruppin.ac.il/igroup47/prod/"       
            }
        })
    }

    render() {

        return (
            /*style={{ backgroundColor: '#1d21243b', height: '100%' }}*/
            <div  style={{ fontWeight: "bold", boxShadow: '10px 70px 300px 50px  yellow', fontSize: '30px', borderRadius: '15px'}}>
                {/* <h1>{this.state.TripsByName[0].Trip.Name}</h1> */}

               <Button  variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button><h1></h1>
                {/* {Weathers} */}

                <div>
                    <div>
                        <nav  class="navbar navbar-inverse" style={{ backgroundColor: 'grey' }}>
                            <Button size="sm" variant="warning" onClick={this._onWeatherButtonClick}><b>Weather</b></Button>
                            <Button size="sm" variant="info" onClick={this._onButtonClick}><b>Info</b></Button>
                            <Button variant="danger" size="sm" onClick={this._ViewParticipantsButtonClick}><b>{this.state.ParticipantsArray.length + 1} / {this.state.participants}</b></Button>
                            <BiCamera size={40} ></BiCamera>
                        </nav>
                        <div><ProgressBar animated striped variant="success" now={(this.state.ParticipantsArray.length / this.state.participants) * 100} label="Participants Capacity" /></div>


                        <nav class="navbar navbar-inverse" style={{ backgroundColor: 'grey' }}>
                            <h3 style={{ boxShadow: '0px 50px 150px 10px yellow', fontSize: '14px', backgroundColor: 'gold', borderRadius: '2px' }}>&nbsp;&nbsp;AT: <b>{this.state.date}</b>&nbsp;&nbsp;</h3>
                            <h3 style={{ boxShadow: '0px 50px 150px 10px yellow', fontSize: '14px', backgroundColor: 'gold', borderRadius: '2px' }}>&nbsp;&nbsp; Name: <b>{this.state.name}</b>&nbsp;&nbsp;</h3>
                            <h3 style={{ boxShadow: '0px 50px 150px 10px yellow', fontSize: '14px', backgroundColor: 'gold', borderRadius: '2px' }}>&nbsp;&nbsp;Admin: <b>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}&nbsp;&nbsp;</b></h3>
                        </nav>



                        {/* <h1>{this.state.name}</h1> */}

                        {/* <FCSimpleBottomNavigation /> */}
                        <Container>
                            <Row>
                                <Col style={{ boxShadow: '0px 0px 150px 10px yellow', fontSize: '14px', borderRadius: '10px' }}>
                                    <h1></h1>
                                    <h5 style={{ fontWeight: "bold", marginRight: '30px', boxShadow: '0px 50px 150px 10px yellow', fontSize: '15px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                                        Travel Checklist
                                    </h5>
                                    <Table striped bordered hover variant="dark" style={{ opacity: this.state.opacity }}>
                                        <thead>
                                            {/* <tr>
                                                <th>Who Bring What </th>
                                            </tr> */}
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <h6>Water</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check1: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>Gas</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check2: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>Tent</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check3: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>a</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check4: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                                <h6>b</h6>
                                                <td>
                                                    <select id="dropdown" disabled={this.state.disabled} onChange={(e) => this.setState({ Check5: e.target.value })}>
                                                        <option value=""></option>
                                                        <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                        {
                                                            this.state.ParticipantsArray?.length > 0 &&
                                                            this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                        }
                                                    </select>
                                                </td>
                                            </tr>

                                        </tbody>

                                    </Table>
                                    {/* <Button variant="info" size="md" onClick={this.test} className="edit">שדגיח</Button> */}
                                    {/* <FCEditList dataFromTripPage={this.state.TripsByName} /> */}
                                    <Button variant="info" onClick={this._EditListButtonClick}>Edit List</Button>

                                    <h1></h1>
                                </Col>
                                <Col style={{ boxShadow: '0px 0px 150px 10px ', fontSize: '14px', borderRadius: '10px',borderColor:'black' }}><br></br><br></br><br></br><br></br><br></br><br></br><div>MAP TRIP COMPONENT<br></br>In Progress . . .</div></Col>
                            </Row>

                        </Container>
                    </div>

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
                                        {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus /></td> */}

                                        <tr>
                                            <h5>Water</h5>
                                            <td>
                                                <select onChange={(e) => this.setState({ Check1: e.target.value })}>
                                                    <option></option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Gas</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check2: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Tent</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check3: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Kitchen supplies</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check4: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Emergency and hygiene supplies</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check5: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/* <td><TextField style={{ backgroundColor: 'white' }} variant="outlined" margin="normal" required fullWidth id="email" name="email" autoComplete="email" autoFocus onChange={(e) => this.setState({ email: e.target.value })} /></td> */}
                                            <h5>Small repair kit</h5>
                                            <td>
                                                <select id="dropdown" onChange={(e) => this.setState({ Check6: e.target.value })}>
                                                    <option value=""></option>
                                                    <option value={localStorage.getItem('user_email')}>{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}</option>
                                                    {
                                                        this.state.ParticipantsArray?.length > 0 &&
                                                        this.state.ParticipantsArray?.map((item, key) => <option value={item.Partner.Email}>{item.Partner.Fname} {item.Partner.Lname}</option>)
                                                    }
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button>
                                <Button variant="secondary" onClick={() => this.setState({ showChecklistComponent: false })}  >Close</Button>
                            </Modal.Footer>
                        </Modal> : null
                    }





                    {/* Showing Trip Card */}
                    {this.state.showComponent ?

                        <Modal
                            show={this.state.showComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                {/* <Modal.Title>Travel Checklist</Modal.Title> */}
                            </Modal.Header>
                            <Modal.Body>
                                <CardColumns>
                                    {
                                        // {this.state.AllTripsBYEmail?.length=0=>{<p>You dont have any </p>}}                    
                                        this.state.TripsByName?.length > 0 &&
                                        this.state.TripsByName?.map((item, key) => <MediaCard2 style={{ backgroundColor: 'yellow' }} name={this.state.name} key={key} date={this.state.date} time={this.state.time} participants={this.state.participants} area={this.state.area} />)
                                    }
                                </CardColumns>

                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.setState({ showComponent: false })}  >Close</Button>
                                <Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button> */}
                            </Modal.Footer>
                        </Modal> : null
                    }



                    {/* Showing Participants Card */}
                    {this.state.showParticipantsComponent ?

                        <Modal
                            show={this.state.showParticipantsComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                {/* <Modal.Title>Travel Checklist</Modal.Title> */}
                            </Modal.Header>
                            <Modal.Body>
                                <CardColumns>
                                    {
                                        // {this.state.AllTripsBYEmail?.length=0=>{<p>You dont have any </p>}}                    
                                        this.state.ParticipantsArray?.length > 0 &&
                                        this.state.ParticipantsArray?.map((item, key) => <Card>
                                            <Card.Img variant="top" src={item.Partner.Image} />
                                            <Card.Body>
                                                <Card.Title>{item.Partner.Fname} {item.Partner.Lname}</Card.Title>
                                                <Card.Text>
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                                            </Card.Footer>
                                        </Card>)
                                    }
                                </CardColumns>

                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.setState({ showComponent: false })}  >Close</Button>
            <Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button> */}
                            </Modal.Footer>
                        </Modal> : null
                    }



                    {/* Showing Weather Component */}
                    {this.state.showWeatherComponent ?

                        <Modal
                            show={this.state.showWeatherComponent}
                            onHide={this.CloseEditList}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>In Progress . . .</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>


                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={() => this.setState({ showComponent: false })}  >Close</Button>
<Button style={{ alignItems: 'center' }} variant="primary">Save Changes</Button> */}
                            </Modal.Footer>
                        </Modal> : null
                    }

                </div >
            </div>

        )
    }
}
