import React from 'react'
import Swal from 'sweetalert2';
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import shadows from '@material-ui/core/styles/shadows';

export default function FCMainMenuPage() {

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
                window.location.href = "http://localhost:3000/"
                // window.location.href = "http://proj.ruppin.ac.il/igroup47/prod/"       
            }
        })
    }

    //'http://proj.ruppin.ac.il/igroup47/prod/uploadedFiles/fadida@fadi.com.png'

    return (
        <div style={{ backgroundColor: '#1d21243b', height: '100vh', alignItems: 'center' }}>
            <div style={{ padding: 5 }}><Button size="sm" onClick={backbtn}>BACK</Button></div>
            <div style={{ textAlign: 'center' }}><br></br>
                <img src={localStorage.getItem('user_image')} alt={true} style={{ width: '45%', borderRadius: 100, borderWidth: 2, borderStyle: 'solid' }} /><br></br><br></br><br></br>
                <p>
                    {/* <h5 style={{ marginLeft: 7 }}>Hi {localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</h5> */}
                    {/* <Button style={{ boxShadow:'0 0 50px 10px #141414',marginLeft: 7,width: '90%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '22px' }} fullWidth color="info" size="sm" disabled='false' >Hi {localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</Button> */}
                    {/* <Button style={{marginLeft: 7,width: '90%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '22px' }} fullWidth color="light" size="sm" disabled='false' >{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</Button> */}
                    <h1 style={{ width: '100%', borderRadius: 10, borderWidth: 5, fontWeight: 'bold', fontSize: '28px'}} className="ExPa">{localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</h1>

                </p>
            </div>
            <div>
                <div style={{ marginTop: 100 }}>
                    {/* <Button fullWidth disabled={true} style={{ alignItems: "center" }} size="lg"  >Join Trip</Button><br></br><br></br><br></br> */}
                    <Button style={{ width: '60%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} disabled={true} size="lg" >Join Trip</Button><br></br><br></br>

                    {/* <Button fullWidth color="info" style={{ alignItems: "center" }} size="lg" href='/main_menu_page/create_new_trip_page'>New Trip</Button> */}
                    <Button style={{ width: '60%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} fullWidth color="warning" size="lg" href='/main_menu_page/create_new_trip_page' >New Trip</Button>

                </div>
                <div style={{ marginTop: 130 }}>
                <Button style={{ width: '40%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} fullWidth color="warning" size="lg" href="/main_menu_page/my_profile" >My Profile</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button style={{ width: '40%', borderRadius: 20, borderWidth: 5, fontWeight: 'bold' }} fullWidth color="warning" size="lg" href="/main_menu_page/my_trips" >My Trips</Button>

                    {/* <Button color="info" fullWidth href="/main_menu_page/my_profile" size="lg"> My Profile </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="info" fullWidth href="/main_menu_page/my_trips" size="lg"  >My Trips</Button> */}
                </div>
            </div>
        </div>
    )
}

