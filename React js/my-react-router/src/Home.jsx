import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate()//This method help us to connect two web pages
    function handleLogin(){//This function will change the navigation path to /dashboard
        navigate("/Dashboard")

    }
    return(
        <div>
            <h1>Welcome students📍</h1>
            <button onClick = {handleLogin}>Login</button>
        </div>
    )
}
export default Home