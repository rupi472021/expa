import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap';
import { AiOutlineRollback } from 'react-icons/ai';
import Swal from 'sweetalert2';
import MediaCard from '../FunctionComponents/FCardMaterialUi';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

export default class CCSearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            AllTrips: [],
            SortTrips: [],
            ShowTrips: [],
            AreaChange: false,
            VehicleTypqChange: false,

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

        console.log("AreaChange: " + this.state.AreaChange)
        console.log("VehicleTypqChange: " + this.state.VehicleTypqChange)

    }

    Sort = (e) => {

        console.log("in Sort function");
        console.log(e.target.value);
        console.log(this.state.AllTrips)

        if (this.state.VehicleTypqChange === false & (e.target.value === 'North' || e.target.value === 'South' || e.target.value === 'East' || e.target.value === 'West' || e.target.value === 'All Areas')) {

            console.log("first if")
            this.setState({ AreaChange: true, SortTrips: [] })

            if (e.target.value === "All Areas") {
                console.log("uri")
                this.setState({ ShowTrips: this.state.AllTrips, AreaChange: false })
            }
            else if (e.target.value === 'North' || e.target.value === 'South' || e.target.value === 'East' || e.target.value === 'West') {

                for (let index = 0; index < this.state.AllTrips.length; index++) {

                    if (this.state.AllTrips[index].Trip.Area === e.target.value) {
                        console.log(this.state.AllTrips[index].Trip.Area)
                        this.state.SortTrips.push(this.state.AllTrips[index])
                    }
                }
                console.log(this.state.SortTrips);
                this.setState({ ShowTrips: this.state.SortTrips })
            }
        }
        if (this.state.AreaChange === false & (e.target.value === 'All Types' || e.target.value === 'JEEP' || e.target.value === 'ATV' || e.target.value === 'RZR' || e.target.value === 'Motorcycle' || e.target.value === 'None')) {

            console.log("in else this.state.AreaChange === false")
            this.setState({ VehicleTypqChange: true, SortTrips: [] })

            if (this.state.AreaChange === false) {
                if (e.target.value === "All Types") {
                    console.log("uri2")
                    this.setState({ ShowTrips: this.state.AllTrips, VehicleTypqChange: false })
                }
                else {
                    for (let index = 0; index < this.state.AllTrips.length; index++) {

                        if (this.state.AllTrips[index].Trip.VehicleType === e.target.value) {
                            this.state.SortTrips.push(this.state.AllTrips[index])
                        }
                    }
                    console.log(this.state.SortTrips);
                    this.setState({ ShowTrips: this.state.SortTrips })
                }
            }
        }
        else if (this.state.AreaChange === true & (e.target.value === 'All Types' || e.target.value === 'JEEP' || e.target.value === 'ATV' || e.target.value === 'RZR' || e.target.value === 'Motorcycle' || e.target.value === 'None')) {

            console.log("this.state.AreaChange === true & this.state.VehicleTypqChange === true")
            for (let index = 0; index < this.state.ShowTrips.length; index++) {

                if (this.state.ShowTrips[index].Trip.VehicleType === e.target.value) {
                    this.state.SortTrips.push(this.state.ShowTrips[index])
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

                    {/* <select id="dropdown" onChange={this.AreaSort} >
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
                    </select> */}

                    <FormControl style={{ marginRight: 75 }}>
                        <InputLabel htmlFor="age-native-simple">Area</InputLabel>
                        <Select
                            native
                            onChange={this.Sort}
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="All Areas"> All Areas</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="age-native-simple">Vehicle</InputLabel>
                        <Select
                            native
                            onChange={this.Sort}
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="All Types"> All Types</option>
                            <option value="JEEP">JEEP</option>
                            <option value="ATV">ATV</option>
                            <option value="RZR">RZR</option>
                            <option value="Motorcycle">Motorcycle</option>
                            <option value="None">None</option>
                        </Select>
                    </FormControl>
                </div>
                <br></br>
                <CardColumns>
                    {
                        this.state.ShowTrips?.length > 0 &&
                        this.state.ShowTrips?.map((item, key) => <MediaCard name={item.Trip.Name} key={key} date={item.Trip.Date} time={item.Trip.Time} participants={item.Trip.Participants} area={item.Trip.Area} vehicle={item.Trip.VehicleType} />)
                    }
                </CardColumns>
            </div>
        )
    }
}

