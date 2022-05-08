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
          username: "curso_em_video",
          follow: "Seguido(a) por java_script",
          imageUrl:
            "https://avatars.githubusercontent.com/u/8683385?s=200&v=4",
        },
        {
          username: "react_js",
          follow: "Seguido(a) por java_script",
          imageUrl:
            "https://ionicframework.com/docs/icons/logo-react-icon.png",
        },
        {
            username: "java",
            follow: "Seguido(a) por java_script",
            imageUrl:
              "https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png",
          },
          {
            username: "node_js",
            follow: "Seguido(a) por java_script",
            imageUrl:
              "https://img2.gratispng.com/20180410/qgw/kisspng-node-js-javascript-database-mongodb-native-5acd4ebf6b4b75.3634484415234044794395.jpg",
          },
          {
            username: "python",
            follow: "Seguido(a) por java_script",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
          },
          
      ]);


    return(
        <div className="col-4 py-2 px-2 side-nav d-none d-md-block  fixed">

            <div className="side-nav-header px-2">

                

                    <div className="d-flex align-items-center ">
                        <div>
                            <img className="perfil-nav" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w" alt="" />
                           
                        </div>

                        <ul className="d-inline-block aling-items-center list-unstyled ul-side">
                                <li className=" font-weight-bold perfil-nome hover">theu_fcardoso</li>
                                <li className=" font-weight-bold perfil-nome">Matheus de França...</li>
                        </ul>
                        
            
                        <span className="blue hover">Mudar</span>
                        
                        
                        
                    </div>

                    <div className="mt-3 d-flex">
                            <p className="p-side-nav font-weight-bold gray">Sugestões para você</p>
                            <span className="font-weight-bold hover">Ver tudo</span>

                    </div>

                    <div className="side-nav-body">

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