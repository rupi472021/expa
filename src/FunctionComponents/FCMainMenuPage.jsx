import React from 'react'

export default function FCMainMenuPage() {
    return (
        <div style={{ backgroundColor: '#1d21243b', height: '100vh' }}>
            <div style={{ textAlign:'center' }}><br></br>
                <img src={localStorage.getItem('user_image')} alt={true} style={{ width: '30%' }} /><br></br><br></br>
                <p>
                    <h5 style={{ marginLeft: 7 }}>Hi {localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')}, Welcome To ExPa!</h5>
                </p>
            </div>
        </div>
    )
}

