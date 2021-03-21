import React from 'react'
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import { ButtonGroup, DropdownButton, Form, Image, ProgressBar, Col, Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


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
            }
        })
    }

    return (
        <div style={{ backgroundColor: '#1d21243b', height: '100vh', alignItems: 'center' }}>
            <Button variant="contained" color="back" size="sm" className="but" onClick={backbtn}> BACK</Button>
            <div style={{ textAlign: 'center' }}><br></br>
                <img src={localStorage.getItem('user_image')} alt={true} style={{ width: '30%' }} /><br></br><br></br>
                <p>
                    <h5 style={{ marginLeft: 7 }}>Hi {localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</h5>
                </p>
            </div>
            <div>
                <div style={{ marginTop: 100 }}>
                    <Button style={{ marginBottom: 75, marginLeft: 10 }} variant="contained" color="secondary" size="large"> Join Trip </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button style={{ marginTop: 75, marginLeft: -140, position: 'absulot' }} variant="contained" color="secondary" size="large" href='/main_menu_page/create_new_trip_page'> New Trip </Button>
                </div>
                <div style={{ marginTop: 125 }}>
                    <Button variant="contained" color="primary" size="large"> My Profile </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary" size="large"> My Trips </Button>
                </div>
            </div>
        </div>
    )
}

