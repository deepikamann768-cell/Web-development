// import React from "react";
// import {BrowserRouter , Routes , Route ,Link} from "react-router-dom" //link tag is acting like anchor(<a>)tag

// function Home(){
//   return <h1>Home page</h1>
// }

// function About(){
//   return <h1>About page</h1>
// }
// function App(){
//   return(
//     <BrowserRouter>
//      <div>
//       <h1>Main Page</h1>

// <nav>
//       <Link to="/Home">Home</Link>
//       <Link to="/About">About</Link>
// </nav>
//       <Routes>
//       <Route path="/Home" element={<Home/>}></Route>
//       <Route path="/About" element={<About/>}></Route>

//       </Routes>
//     </div>
//     </BrowserRouter>
   
//   )
// }
// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;