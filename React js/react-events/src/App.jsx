// import  React from "react";

// function App(){
  
//   function handleClick(){
//     alert('Button clicked')
//   }
//   return(
//     <button onClick={handleClick}>Click Me</button>
//   )
// }
// export default App;

//Example 2
// import { useState } from "react";
 
// function App(){
//   const [isFollowed , setIsFollowed] = useState(false)
//   return(
//     <button onClick={()=> setIsFollowed(!isFollowed)}>  (! mark is giving the opposite value of the function)
//       {isFollowed ? "following": "follow"}
//     </button>
//   )
// }
// export default App

//Example3 - Live search
// import {useState} from  "react";

// function App(){
//    const [text,setText]=useState("")

//    return(
//     <div>
//       <input placeholder="Serach...."
//       onChange={(e)=> setText(e.target.value)}></input>
//       <h3>You typed: {text}</h3>
//     </div>
//    )
// }
// export default App;


//Example 4:
import { useState } from "react";

function App(){

  const [color , setColor] = useState("white")
  return(
    <div style = {{backgroundColor:color, height:'100vh'}}>
      <button onClick={()=> setColor("red")}>Red</button>
      <button onClick={()=> setColor("blue")}>Blue</button>
      <button onClick={()=> setColor("green")}>Green</button>
    </div>
  )
}
export default App

