import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap';
import FCSearchCard from '../FunctionComponents/FCSearchCard';
import { AiOutlineRollback } from 'react-icons/ai';
import Swal from 'sweetalert2';

export default class CCSearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            AllTrips: [],
            SortTrips: [],
            ShowTrips: [],

        }
    };


    componentDidMount = () => {

        console.log("in componentDidMount search page")

        let apiUrl = `http://localhost:54976/api/NewTrip`

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                //this.state.temparray=[];
                console.log(data);
                data.forEach((item) => {
                    this.state.AllTrips.push({ Trip: item });
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        console.log("this.state.alltrips....");
        console.log(this.state.AllTrips);
        this.setState({ ShowTrips: this.state.AllTrips })


    }

    AreaSort = (e) => {

        console.log("in AreaSort function");
        console.log(e.target.value);
        console.log(this.state.AllTrips)
        this.state.SortTrips = [];

        if (e.target.value == "Area") {
            console.log("uri")
            this.setState({ ShowTrips: this.state.AllTrips })
        }
        else {
            for (let index = 0; index < this.state.AllTrips.length; index++) {

                if (this.state.AllTrips[index].Trip.Area == e.target.value) {
                    console.log(this.state.AllTrips[index].Trip.Area)
                    this.state.SortTrips.push(this.state.AllTrips[index])
                }

            }
            console.log(this.state.SortTrips);
            this.setState({ ShowTrips: this.state.SortTrips })
        }
    }

    VehicleTypeSort = (e) => {

        console.log("in VehicleTypeSort function");
        console.log(e.target.value);
        console.log(this.state.AllTrips)
        this.state.SortTrips = [];

        if (e.target.value == "Vehicle") {
            console.log("uri2")
            this.setState({ ShowTrips: this.state.AllTrips })
        }
        else {
            for (let index = 0; index < this.state.AllTrips.length; index++) {

                if (this.state.AllTrips[index].Trip.VehicleType == e.target.value) {
                    this.state.SortTrips.push(this.state.AllTrips[index])
                }

            }

            console.log(this.state.SortTrips);
            this.setState({ ShowTrips: this.state.SortTrips })
        }
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
            <div>
                <div><br></br>
                    <AiOutlineRollback onClick={this.backbtn} size={30} style={{ marginLeft: 320 }}></AiOutlineRollback>
                    <h3>Search the best trip for you!</h3><br></br>

                    <select id="dropdown" onChange={this.AreaSort} >
                        <option value="Area" >Area</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                    </select>{' '}

                    <select id="dropdown" onChange={this.VehicleTypeSort} >
                        <option value="Vehicle">Vehicle Type</option>
                        <option value="JEEP">JEEP</option>
                        <option value="ATV">ATV</option>
                        <option value="RZR">RZR</option>
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="None">None</option>
                    </select>

                </div>
                <br></br>
                <CardColumns>
                    {
                        // {this.state.AllTripsBYEmail?.length=0=>{<p>You dont have any </p>}}                    
                        this.state.ShowTrips?.length > 0 &&
                        this.state.ShowTrips?.map((item, key) => <FCSearchCard name={item.Trip.Name} key={key} date={item.Trip.Date} time={item.Trip.Time} participants={item.Trip.Participants} area={item.Trip.Area} vehicle={item.Trip.VehicleType} />)
                    }
                </CardColumns>

            </div>
        )
    }
}
