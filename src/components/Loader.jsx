import React from "react";
import '../styles/Loader.css'

function Loader(){
    return(
        <>
        <div className="anim">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div></>
    )
}

export default Loader