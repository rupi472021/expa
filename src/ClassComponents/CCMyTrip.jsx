import React, { Component } from 'react'
import { Button, CardColumns } from 'react-bootstrap';
import Swal from 'sweetalert2';
import FCCard from '../FunctionComponents/FCCard';
import MediaCard from '../FunctionComponents/FCardMaterialUi';
import '../MyStyle.css';
import MediaCard2 from '../FunctionComponents/FCardMaterialUi2';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


export default class CCMyTrip extends Component {

    constructor(props) {

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        super(props);
        this.state = {
            TripToRender: [],
            AllTripsFromSql: [],
            AdminTrips: [],
            ParticipantTrips: [],
            AllTfilterrips: [],
            activeTrips: '',
            sort: '',
            aaa: [],
            All: [],
            currentDate: date,
        }
    };

    componentDidMount = () => {

        let apiUrl = `http://localhost:53281/api/NewTrip/`

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                //this.state.temparray=[];
                console.log("The trips for this email -  trips data from sql")
                console.log(data);
                data.forEach((item) => {
                    this.state.AllTripsFromSql.push({ Trip: item });
                    this.setState({ adminOfTripArr: data })
                })
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        console.log("AllTripsFromSql....");
        console.log(this.state.AllTripsFromSql);


        let apiUrl1 = `http://localhost:53281/api/ParticipantsInTrip/getSpecific/${localStorage.getItem('user_email')}/`

        fetch(apiUrl1)
            .then(response => response.json())
            .then(data => {
                //this.state.temparray=[];
                console.log("The trips for this email -  trips data from sql")
                console.log(data);

                const filterArr = data.filter(item => item.Active === true);
                filterArr.forEach((item) => {
                    this.state.AllTfilterrips.push({ Trip: item });
                })
                console.log(this.state.AllTfilterrips);
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });



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

    showMyTrips = () => {

        console.log("in showMyTrips function")

    }


    Sort = (e) => {

        console.log("in Sort function");
        console.log(e.target.value);

        if (e.target.value === "byMe") {

            
            console.log(this.state.AllTripsFromSql)
            const fal = false;
            const tru = true;

            console.log("you choose trips by me");
            const TripsByMe = this.state.AllTripsFromSql.filter(f => f.Trip.Admin_email === localStorage.getItem('user_email'))
            // const TripsByMee = TripsByMe.filter(d => d.Trip.Active == tru)
            // console.log(TripsByMee)


            this.setState({
                TripToRender: TripsByMe,
                sort: "byMe"
            })

        }

        if (e.target.value === "PleaseChoose") {

            console.log("you choose to see :" + e.target.value);
            this.setState({ sort: '' })

        }

        if (e.target.value === "participate") {

            this.state.aaa = [];

            console.log("you choose participate trips");
            console.log("participate trips:");
            console.log(this.state.AllTfilterrips);

            for (let i = 0; i < this.state.AllTfilterrips.length; i++) {
                for (let j = 0; j < this.state.AllTripsFromSql.length; j++) {
                    if (this.state.AllTfilterrips[i].Trip.TripName === this.state.AllTripsFromSql[j].Trip.Name) {
                        console.log(this.state.AllTripsFromSql[j])
                        this.state.aaa.push(this.state.AllTripsFromSql[j])
                    }
                }
            }

            console.log(this.state.aaa);
            this.setState({
                TripToRender: this.state.aaa,
                sort: "participate"
            })

        }



    }

    render() {
        return (
            <div style={{ backgroundColor: '#92A8D1' }}>
                <div><Button style={{ color: 'white' }} variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div><br></br>
                <Button style={{ width: '90%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold', fontSize: '40px' }} fullWidth variant="info" size="lg" disabled='false' >My Trips</Button><br></br><br></br>
                {/* <InputLabel htmlFor="age-native-simple">What do you want to see?</InputLabel> */}
                <Select
                    style={{ color: 'white' }}
                    native
                    onChange={this.Sort}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >

                    <option style={{ color: 'black' }} value="PleaseChoose"> Watch Your Trips </option>
                    <option style={{ color: 'black' }} value="byMe">I'm the Trip Admin</option>
                    <option style={{ color: 'black' }} value="participate"> I'm a Partner </option>
                    {/* <option style={{ color: 'black' }} value="PreviousTrips"> Previous Trips </option> */}

                </Select>
                <br></br><br></br>
                <CardColumns>
                    {
                        this.state.TripToRender?.length > 0 && this.state.sort !== '' &&
                        this.state.TripToRender?.map((item, key) => <MediaCard2 name={item.Trip.Name} key={key} date={item.Trip.Date} time={item.Trip.Time} participants={item.Trip.Participants} area={item.Trip.Area} adminTrip={this.state.adminOfTripArr} />)
                    }
                </CardColumns>
                <div>
                    {this.state.AllTripsFromSql?.length === 0 && <Button style={{ width: '90%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold', fontSize: '20px' }} fullWidth variant="warning" size="sm" disabled='false' >Sorry..You Don't Have Any Previous/OnAir Trips </Button>}
                </div>
            </div>
        )
    }
}
