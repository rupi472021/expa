import React from 'react';
import { Link ,withRouter } from 'react-router-dom';

function FCHeader() {
    return (
        <div style={{margin:20  }}>
            <Link to="/">HOME</Link> &nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;
            <Link to="/register">Register</Link>   &nbsp;&nbsp;&nbsp;|  &nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default withRouter(FCHeader);