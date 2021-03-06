import React from "react";
import "../Bootstrap/Bootstrap.css"
import "./Navbar.css";
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { BsCollectionPlay } from "react-icons/bs"
import { BiShoppingBag } from "react-icons/bi"
import { faCompass } from "@fortawesome/free-regular-svg-icons"
import { faHeart } from '@fortawesome/free-regular-svg-icons'



function Bottombar(){

    const home = <FontAwesomeIcon icon={faHouse}/>
    const search = <FontAwesomeIcon icon={faMagnifyingGlass}/>
    
    const explorer = <FontAwesomeIcon icon={faCompass}/>
    const heart = <FontAwesomeIcon icon={faHeart}/>


    return(
        <nav className="navbar navbar-expand-lg navbar-expand navbar-light navbar-custom d-flex d-md-none shadow-sm fixed-bottom">
            <div className="container-fluid d-flex justify-content-center ">
                
                    
                
                
                <ul className="list-unstyled d-flex me-auto mb-2 mb-lg-0">

                    <li className="nav-icons my-auto px-4">{home}</li>
                    <li className="nav-icons my-auto px-4">{search}</li>
                    <li className="nav-icons my-auto px-4"><BsCollectionPlay/></li>
                    <li className="nav-icons my-auto px-4"><BiShoppingBag/></li>
                    <li>
                        <img className="perfil" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w" />
                    </li>
                    

                </ul>
                
            </div>
        </nav>
    )
}

export default Bottombar;