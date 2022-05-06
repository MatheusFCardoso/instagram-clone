import React from "react";


function Suggestion({username, follow, imageUrl }){
    return(
        <div className="d-flex align-items-center my-2 ">
            <div>
                <img className="perfil" src={imageUrl} alt="" />
            </div>

            <ul className="d-inline-block aling-items-center list-unstyled ul-sugest">
                <li className="font-weight-bold perfil-nome">{username}</li>
                <li className="perfil-nome  gray ">{follow}</li>
            </ul>
            

            <span className="blue">Seguir</span>
                                       
                        
        </div>
    )
}

export default Suggestion;