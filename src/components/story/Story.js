import React from "react";
import "../Bootstrap/Bootstrap.css"
import "./Story.css";

function Story(){
    return(
        <div className="card">
        <div className="card-body d-flex justify-content-start">
            <ul className="list-unstyled mb-0">
                <li className="list-inline-item">
                    <button className="btn p-0 m-0">
                        <div className="d-flex flex-column align-items-center">
                            <div
                                className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border border-danger story-profile-photo">
                                <img className="perfil" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w"
                                    />
                            </div>
                            <small>samkolder</small>
                        </div>
                    </button>
                </li>
                <li className="list-inline-item">
                    <button className="btn p-0 m-0">
                        <div className="d-flex flex-column align-items-center">
                            <div
                                class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border border-danger story-profile-photo">
                                <img className="perfil" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w"/>
                            </div>
                            <small>petermckinnon</small>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>

                            
    );
}

export default Story;