import React from "react";
import "../Bootstrap/Bootstrap.css"
import "./Post.css";
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'








function Post2({username, caption, imageUrl }) {

  
  const heart = <FontAwesomeIcon icon={faHeart}/>
  const comment = <FontAwesomeIcon icon={faComment}/>
  const send = <FontAwesomeIcon icon={faPaperPlane} />
  const save = <FontAwesomeIcon icon={faBookmark} />

  return (

    <div className="col-7">

      <div className="post">

        <div className="post-header px-2 py-2">

          <div className="d-flex flex-row align-items-center">

            <div>

              <img className="perfil" src="https://media-exp1.licdn.com/dms/image/C4D03AQEt1RmPk_o_Aw/profile-displayphoto-shrink_400_400/0/1648495115377?e=1656547200&v=beta&t=NE4ZU6Eo4s-TzXq67QXl05FFjXz-6OqD2UihSDdIk_w" alt="" />

            </div>

            <span className="font-weight-bold perfil-nome" >{username}</span>

          </div>


        </div>

        <div className="post-body">

          <img className="img-post" src={imageUrl} alt="" />

        </div>

        <div className="post-footer px-2 py-2" >

          <div className="d-flex justify-content-between">
            <ul className="icones">
              <li className="px-1">{heart}</li>
              <li className="px-1">{comment}</li>
              <li className="px-1">{send}</li>
            </ul>
            <ul className="icones" >
              <li>{save}</li>
            </ul>
          </div>
            

          

        </div>

      </div>

    </div>
    
    

    
  );
}

export default Post2;