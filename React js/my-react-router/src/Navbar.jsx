import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="Dashboard">Dashboard</Link>
        </nav>
    )
}
export default Navbar