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
import FCSimpleBottomNavigation from '../FunctionComponents/FCSimpleBottomNavigation';



// const useStyles = makeStyles({
//     root: {
//         width: 500,
//         backgroundColor: 'yellow'
//     },
// });


export default class CCTripPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            setValue: '',
            TripsByName: [],
        }
    };

    componentDidMount = () => {
        let apiUrl = `http://localhost:51566/api/NewTrip/getripByName/${localStorage.getItem('trip_name')}/`
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
                <div>

                    <div><br></br>
                        <h4 style={{ fontWeight: "bold", width: '90%', boxShadow: '0px 50px 150px 10px yellow', fontSize: '30px', backgroundColor: 'gold', borderRadius: '15px', marginLeft: '21px' }}>
                            Trip Name : {this.state.name}
                        </h4>


                        <FCSimpleBottomNavigation />

                        <div style={{ fontWeight: "bold" }}>
                            Choose Your Preference For Your Perfect Trip
                    </div>
                    </div><br></br>



                    <br></br><br></br>
                    <Button variant="secondary" size="sm" onClick={this.test} className="but"> check what print </Button>
                </div >

            </div>

        )
    }
}
