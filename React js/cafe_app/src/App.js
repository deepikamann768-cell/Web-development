import React from "react";
import Productcards from "./Productcard";

function App(){
  
  return(
    //Html code-Structure
    <div>
      <h1>Welcome to raect</h1>
      <p><mark>Command:</mark><del>npm</del><ins>npx create-react-app</ins></p>
      <button>Login</button>
      <Productcards/>
      <Productcards/>
      <Productcards/>
      
    </div>
  )
}
export default App