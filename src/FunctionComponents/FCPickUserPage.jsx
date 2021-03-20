import React from 'react'

export default function FCPickUserPage() {
    return (
        <div>
            <br></br>
            <img src = {localStorage.getItem('user_image')} alt=""/><br></br><br></br>
            hi {localStorage.getItem('user_fname')} {localStorage.getItem('user_lname')} tnx for login from {localStorage.getItem('social_media_name')}
        </div>
    )
}

