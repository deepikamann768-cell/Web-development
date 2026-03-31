import React from "react";
import Productcard from "./Productcard";

function App(){
  
  return(
    //Html code-Structure
    <div>
      <h1>Welcome to raect</h1>
      <p><mark>Command:</mark><del>npm</del><ins>npx create-react-app</ins></p>
      <button>Login</button>
      <Productcard/>
      <Productcard/>
      <Productcard/>
      
    </div>
  )
}
export default App