import React, { Component } from 'react'
import { Button, CardColumns, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import FCCard from '../FunctionComponents/FCCard';


export default class CCMyTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllTripsBYEmail: [],


        }
    };

    componentDidMount=()=>{
        let apiUrl = `http://localhost:53281/api/NewTrip/getSpecific/${localStorage.getItem('user_email')}/`

        
        // fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(data => {
        //         //this.state.temparray=[];
        //         console.log("The trips for this email -  trips data from sql:")
        //         console.log(data);
        //         data.forEach((item) => {
        //             this.state.AllTripsBYEmail.push({ Trip: item});
        //         })
        //     }).catch(function (error) {
        //         console.log("Error getting document:", error);
        //     });


                    ///Getting all the Users
        // console.log("in getmatch function");
        // let apiUrl = `http://localhost:53281/api/Questionnaire/getSpecific/${localStorage.getItem('user_email')}/${this.state.match_percent}`
       //let apiUrl = `http://proj.ruppin.ac.il/igroup47/prod/api/Questionnaire/getSpecific/${localStorage.getItem('user_email')}/${this.state.match_percent}`

    //    fetch(apiUrl)
    //        .then(response => response.json())
    //        .then(data => {
    //            //this.state.temparray=[];
    //            console.log("Relevant Users Algoritem -  data from sql:")
    //            console.log(data);
    //            data.forEach((item) => {
    //                this.state.temparray.push({ tempemail: item.Email, match: item.Match / 23 * 100 });
    //            })
    //        }).catch(function (error) {
    //            console.log("Error getting document:", error);
    //        });
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
        return (
            <div>
                <div><Button variant="secondary" size="sm" onClick={this.backbtn} className="but"> Main Menu </Button></div><br></br>
                <h1>My Trips</h1>
                <CardColumns>
                    {/* ingredients?.length > 0 &&
                        ingredients?.map((item, key) => <CheckInput checked={item.checked} changeChecked={this.changedCheckedValues} id={item.ing.id} key={key} label={item.ing.name} />) */}

                    <FCCard text="avi" title="this is title" />
                </CardColumns>
            </div>
        )
    }
}
