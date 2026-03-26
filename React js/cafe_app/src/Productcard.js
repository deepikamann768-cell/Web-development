import React from "react";


function Productcard(){

    return(
        <div>
            <div className="product">
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D" height="250" width="250"/>
            <p><mark>Price:</mark>$<del>900</del>/<strong>299</strong></p>
            <button>Buy now</button>
        </div>

        </div>
        
    )
}
export default Productcard