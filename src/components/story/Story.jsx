import React from "react";
import "../Bootstrap/Bootstrap.css"
import "./Story.css";

function Story({username, imageUrl }){
    return(
        <li className="text-center">
                <img className="perfil img-story" src={imageUrl} alt="" />
                <span className="d-block gray hover d-none d-md-block">{username}</span>
        </li>
    )
}

export default Story 