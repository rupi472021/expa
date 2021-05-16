import React, { Component } from 'react'
import { AiOutlineRollback } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Form, Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const useStyles = makeStyles({
    root: {
        width: 500,
        backgroundColor:'yellow'
    },
});


export default class CCTripPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            setValue: '',
        }
    };



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
                <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div>
                <div>

                    <div><br></br>
                        <h4 style={{ fontWeight: "bold", width: '90%', boxShadow: '0px 50px 150px 10px yellow', fontSize: '30px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                            TripName {localStorage.getItem('user_fname')}
                        </h4>

                        <BottomNavigation
                            value={this.state.value}
                            onChange={(event, newValue) => {
                                this.state.setValue(newValue);
                            }}
                            showLabels
                        className={useStyles.root}
                        >
                            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                        </BottomNavigation>

                        
                        <div style={{ fontWeight: "bold" }}>
                            Choose Your Preference For Your Perfect Trip
                    </div>
                    </div><br></br>
                    <Form.Group controlId="formBasicEmail" style={{ width: '75%', marginLeft: 50 }} >
                        <Form.Label style={{ fontWeight: 'bold', fontSize: 20 }} > When ?</Form.Label>
                        <Form.Control style={{ borderRadius: 20 }} type="datetime-local" onChange={(d) => this.setState({ trip_date: JSON.stringify(d.target.value) })} autoFocus />
                    </Form.Group>

                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={(e) => this.setState({ with_children: e.target.value })}>
                        <Button value="YES">YES</Button>&nbsp;&nbsp;
                                <Button value="NO">NO</Button>&nbsp;&nbsp;
                            </ButtonGroup>

                    <br></br><br></br>
                </div >

            </div>

        )
    }
}
