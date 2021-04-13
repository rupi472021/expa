import React from 'react'
import Swal from 'sweetalert2';
import { ButtonGroup, DropdownButton, Form, Image, ProgressBar, Col, Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


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

    return (
        <div style={{ backgroundColor: '#1d21243b', height: '100vh', alignItems: 'center' }}>
            <div style={{ padding: 10 }}><Button variant="secondary" size="sm" onClick={backbtn}>BACK</Button></div>
            <div style={{ textAlign: 'center' }}><br></br>
                <img src={localStorage.getItem('user_image')} alt={true} style={{ width: '40%', borderRadius: 70, borderWidth: 5, borderStyle: 'solid' }} /><br></br><br></br>
                <p>
                    <h5 style={{ marginLeft: 7 }}>Hi {localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</h5>
                </p>
            </div>
            <div>
                <div style={{ marginTop: 100 }}>
                    <Button fullWidth disabled={true} style={{ alignItems: "center" }} variant="secondary" size="lg"  >Join Trip</Button><br></br><br></br><br></br>
                    <Button fullWidth style={{ alignItems: "center" }} variant="primary" size="lg" href='/main_menu_page/create_new_trip_page'>New Trip</Button>
                </div>
                <div style={{ marginTop: 125 }}>
                    <Button fullWidth href="/main_menu_page/my_profile" variant="primary" size="lg"> My Profile </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button fullWidth disabled={true} variant="secondary" size="lg"  >My Trips</Button>

                </div>
            </div>
        </div>
    )
}

