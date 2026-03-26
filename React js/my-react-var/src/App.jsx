//Example1
// import React from "react";

// function App(){

//   let count = 0
//   //count = count + 1
//   //vaue updated manually
  
//   function Increase(){
//     count = count + 1
//   }
//   console.log(count)

//(THE PROBLEM IN USING THIS CONCEPT IS THAT THE UPDATE VALUE IS NOT SHOWN ON THE SCREEN/UI)-SOLUTION useSTATE

//   return(
//     <div>
//       <h1>The value oof count is {count}</h1>
//     <button onClick={Increase}>Click me</button>
//     </div>
//   );
  
// }
// export default App;

//Example 2:
//useState- SPECIAL VARIABLES THAT REMEMBERS VALUES AND UPDATE SCREEN AUTOMATICALLY 
//IT IS ALSO KNOWN AS A HOOK IN REACT
//SYNTAX - const [count , setVaraibleName - it is a function]=useState(Initial VAlue of the variable)
// - import {useState}-Mandatory

// import React , {useState} from "react";

// function App(){

//     const [likes , setLikes] = useState(0)

//     function IncreaseLike(){
//         setLikes(likes + 1)
//     }
//     return(
//         <div>
//             <h2>Likes:{likes}</h2>
//             <button onClick={IncreaseLike}>💖Like</button>
//         </div>
//     )
// }
// export default App;

//Example 3- SHow/Hide Password
// import { useState } from "react";

// function App(){

//     const [show , setShow] = useState(false)

// //type = password hidden
// //type = text show
//     return(
//         <div>
//             <input type = {show ? "text":"password"}></input>
//             <button onClick={()=>setShow( !show)}>Show/Hide</button>
//         </div>
//     );
// }
// export default App;

//Example 4
import { useState } from "react";

function App(){
    const [quant, setQuant] = useState(0)

    return(
        <div>
            <h1>Quantity {quant}</h1>
            <button  onClick={()=> setQuant( quant + 1)}>➕</button>
            <button onClick={()=> setQuant(quant - 1)}>➖</button>
        </div>
    )
}
export default App;