import React from 'react'
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiJeep } from 'react-icons/gi';
import { AiOutlineRollback } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { Switch, Route, withRouter } from 'react-router-dom';


function FCMainMenuPage(props) {

    const backbtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Press Yes to return Login Pgae",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                //window.location.href = "http://localhost:3000/"
                //window.location.href = "https://agitated-varahamihira-62ad26.netlify.app"

                props.history.push('/')

            }
        })
    }

    return (
        <div style={{ backgroundColor: '#92A8D1', height: '100vh', alignItems: 'center' }}>
            <AiOutlineRollback onClick={backbtn} size={50} style={{ marginLeft: 320, color: 'white' }}></AiOutlineRollback>
            {/* <div style={{ padding: 5 }}><Button size="sm" onClick={backbtn}>BACK</Button></div> */}
            <div  /*style={{ textAlign: 'center', marginTop: 50 }}*/><br></br>
                <div>
                    <img src={localStorage.getItem('user_image')} alt={true} style={{ width: '45%', height: '90%', borderRadius: 100, borderWidth: 2, borderStyle: 'solid' }} /><br></br><br></br><br></br>
                </div>
                <p >
                    <h1 style={{ width: '100%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '28px', color: 'white' }} className="ExPa">{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</h1>
                </p>
            </div>
            <br></br><br></br>
            <div>
                <div style={{ marginTop: 30 }}>
                    <img src="https://img.icons8.com/nolan/64/border-color.png" onClick={() => props.history.push('/main_menu_page/create_new_trip_page')} /><br></br><br></br>
                    {/* <h1></h1> */}
                    <img src="https://img.icons8.com/cute-clipart/64/000000/search.png" onClick={() => props.history.push('/main_menu_page/search_trip_page')} />
                    {/* <Button style={{ width: '60%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} disabled={true} size="lg" >Join Trip</Button><br></br><br></br> */}
                    {/* <h6 style={{ marginRight: 250 }}><BiSearchAlt2 size={70} onClick={() => window.location.href = "/main_menu_page/search_trip_page"} ></BiSearchAlt2><br></br> searchTrip</h6>
                    <h6 style={{ marginRight: -250, marginTop: -90 }}><GoPlus size={70} onClick={() => window.location.href = "/main_menu_page/create_new_trip_page"}></GoPlus><br></br>newTrip</h6> */}
                    {/* <Button style={{ width: '60%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} fullWidth color="warning" size="lg" href='/main_menu_page/create_new_trip_page' >New Trip</Button> */}
                </div>
                <br></br><br></br><br></br><br></br><br></br>
                <div style={{ marginTop: 0 }}>

                    {/* <img src="https://img.icons8.com/fluent/48/000000/add-user-group-woman-man.png"/> */}
                    <img style={{ marginRight: 250 }} src="https://img.icons8.com/bubbles/50/000000/edit-user.png" onClick={() => props.history.push('/main_menu_page/my_profile')} />
                    <img style={{ marginLeft: 0 }} src="https://img.icons8.com/color/48/000000/binoculars.png" onClick={() => props.history.push('/main_menu_page/my_trips')} />

                    {/* <h6 style={{ marginRight: 250 }}><RiUserSettingsLine style={{ marginRight: 10 }} size={70} onClick={() => window.location.href = "/main_menu_page/my_profile"} >  </RiUserSettingsLine> myProfile</h6>
                    <h6 style={{ marginLeft: 250, marginTop: -120 }}><GiJeep style={{ marginTop: 20 }} size={70} onClick={() => window.location.href = "/main_menu_page/my_trips"} ></GiJeep> myTrips</h6> */}
                    {/* <Button style={{ width: '40%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} fullWidth color="warning" size="lg" href="/main_menu_page/my_profile" >My Profile</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button style={{ width: '40%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} fullWidth color="warning" size="lg" href="/main_menu_page/my_trips" >My Trips</Button> */}
                </div>
            </div>
        </div >
    )
}

export default withRouter(FCMainMenuPage);