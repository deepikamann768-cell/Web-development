import React from "react";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App(){
  return(
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
      <Navbar/>
      <About/>
      <Home/>
      
    </div>
  );
}
export default App;