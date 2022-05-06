import React, { useState } from "react";
import "../Bootstrap/Bootstrap.css"
import "./Sidenav.css";
import Suggestion from "./Suggestion";


function Sidenav(){

    const [sugest] = useState([
        {
          username: "java_script",
          follow: "Novo no Instagram",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          username: "react_js",
          follow: "Seguido(a) por java_script",
          imageUrl:
            "https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png",
        },
      ]);


    return(
        <div className="col-4 py-2 px-2 side-nav">

            <div className="side-nav-header px-2">

                

                    <div className="d-flex align-items-center ">
                        <div>
                            <img className="perfil-nav" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w" alt="" />
                           
                        </div>

                        <ul className="d-inline-block aling-items-center list-unstyled ul-side">
                                <li className=" font-weight-bold perfil-nome">Matheus</li>
                                <li className=" font-weight-bold perfil-nome">Matheus</li>
                        </ul>
                        
            
                        <span className="blue 
                        
                        ">Mudar</span>
                        
                        
                        
                    </div>

                    <div className="my-3 d-flex justify-content-between">
                            <p className="font-weight-bold gray">Sugestões para você</p>
                            <span className="font-weight-bold">Ver tudo</span>

                    </div>

                    <div className="side-vav-body">

                    {sugest.map((sugest)=>(
                    <Suggestion
                    username={sugest.username}
                    follow={sugest.follow}
                    imageUrl={sugest.imageUrl}
                    />))}

                    </div>
                
            </div>

            

        </div>
    )
}

export default Sidenav ;