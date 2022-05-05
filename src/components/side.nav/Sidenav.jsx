import React from "react";
import "../Bootstrap/Bootstrap.css"
import "./Sidenav.css";


function Sidenav(){
    return(
        <div className="col-3 py-2 px-2 side-nav">

            <div className="side-nav-header">

                <div className="">

                    <div className="d-flex justify-content-between">
                        <div>
                            <img className="perfil" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w" alt="" />
                        </div>
                        
                        <ul>
                            <li className="font-weight-bold perfil-nome">Matheus</li>
                            <li className="font-weight-bold perfil-nome">Matheus</li>
                        </ul>

                        <ul>
                            <li><span>Mudar</span></li>
                        </ul>
                        
                    </div>

                    

                </div>

            </div>

            

        </div>
    )
}

export default Sidenav ;