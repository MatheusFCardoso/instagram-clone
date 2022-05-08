import React from "react";
import "../Bootstrap/Bootstrap.css"
import "./Navbar.css";
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons"
import { faCompass } from "@fortawesome/free-regular-svg-icons"
import { faHeart } from '@fortawesome/free-regular-svg-icons'



function Navbar(){

    const home = <FontAwesomeIcon icon={faHouse}/>
    const menssenger = <FontAwesomeIcon icon={faMessage}/>
    const more = <FontAwesomeIcon icon={faSquarePlus}/>
    const explorer = <FontAwesomeIcon icon={faCompass}/>
    const heart = <FontAwesomeIcon icon={faHeart}/>


    return(
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
            <div className="container-fluid d-flex justify-content-lg-around justify-content-sm-between ">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram original logo"/>
                    
                <form className="d-none d-md-flex">
                    <input className="search" type="search" placeholder="Pesquisar" aria-label="Search"/>
                </form>
                
                <ul className="list-unstyled d-flex me-auto mb-2 mb-lg-0">

                    <li className="nav-icons my-auto px-2 d-none d-md-flex order-1">{home}</li>
                    <li className="nav-icons my-auto px-2 order-lg-2 order-sm-3 order-3">{menssenger}</li>
                    <li className="nav-icons my-auto px-2 order-lg-3 order-sm-1 order-1">{more}</li>
                    <li className="nav-icons my-auto px-2 d-none d-md-flex order-4">{explorer}</li>
                    <li className="nav-icons my-auto px-2 order-lg-5 order-sm-2 order-2 ">{heart}</li>
                    <li className="d-none d-md-flex order-6" >
                        <img className="perfil" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w" />
                    </li>
                    

                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;