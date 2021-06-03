import React, { Component } from 'react'
import { Button, CardColumns } from 'react-bootstrap';
import Swal from 'sweetalert2';
import FCCard from '../FunctionComponents/FCCard';
import MediaCard from '../FunctionComponents/FCardMaterialUi';
import '../MyStyle.css';
import MediaCard2 from '../FunctionComponents/FCardMaterialUi2';


export default class CCMyTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllTripsBYEmail: [],
        }
    };

    componentDidMount = () => {
        let apiUrl = `http://localhost:51566/api/NewTrip/getSpecific/${localStorage.getItem('user_email')}/`


        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                //this.state.temparray=[];
                console.log("The trips for this email -  trips data from sql")
                console.log(data);
                data.forEach((item) => {
                    this.state.AllTripsBYEmail.push({ Trip: item });
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        console.log("this.state.alltrips....");
        console.log(this.state.AllTripsBYEmail);

    }

    backbtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Press Yes to return Main Menu Page",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "http://localhost:3000/main_menu_page"
            }
        })
    }


    render() {
        // const { AllTripsBYEmail } = this.state;

        return (
            <div>
                <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div><br></br>
                <Button style={{ width: '90%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold', fontSize: '40px' }} fullWidth variant="info" size="lg" disabled='false' >My Trips</Button>
                <br></br><br></br>
                <CardColumns>
                    {
                        // {this.state.AllTripsBYEmail?.length=0=>{<p>You dont have any </p>}}                    
                        this.state.AllTripsBYEmail?.length > 0 && 
                        this.state.AllTripsBYEmail?.map((item, key) => <MediaCard2 name={item.Trip.Name} key={key} date={item.Trip.Date} time={item.Trip.Time} participants={item.Trip.Participants} area={item.Trip.Area} />)
                    }
                </CardColumns>
                <div>
                    {this.state.AllTripsBYEmail?.length === 0 &&  <Button style={{ width: '90%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold', fontSize: '20px' }} fullWidth variant="warning" size="sm" disabled='false' >Sorry..You Don't Have Any Previous/OnAir Trips </Button>}
                </div>
            </div>
        )
    }
}
