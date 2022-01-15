import  React from "react";
import { useLocation } from "react-router"


function Detail() {
    const location = useLocation()
    console.log(location.state.content)
    return <div>
        {location.state.content}
    </div>
}




export default Detail;