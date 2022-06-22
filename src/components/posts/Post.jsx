import React from "react";
import "../Bootstrap/Bootstrap.css"
import "./Post.css";
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { HiDotsHorizontal } from 'react-icons/hi'
import { HiDotsVertical } from 'react-icons/hi'








function Post({ username, caption, imageUrl, perfil, like, comments }) {


  const heart = <FontAwesomeIcon icon={faHeart} />
  const comment = <FontAwesomeIcon icon={faComment} />
  const send = <FontAwesomeIcon icon={faPaperPlane} />
  const save = <FontAwesomeIcon icon={faBookmark} />
  const emoji = <FontAwesomeIcon icon={faSmile} />


  return (

    <div className="col-md-7 col-12 pt-lg-3 pt-1 my-1">

      <div className="post">

        <div className="post-header px-2 py-2">

          <div className="d-flex align-items-center justify-content-between">

            <div>

              <img className="perfil" src={perfil} alt="" />
              <span className="font-weight-bold perfil-nome hover" >{username}</span>

            </div>
            <span className="dots d-none d-md-flex px-2">
              <HiDotsHorizontal />
            </span>
            <span className=" dots d-flex d-md-none px-2">
              <HiDotsVertical />
            </span>


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

          <div className="post-comment" >
            <p className="font-weight-bold hover">{like} Curtidas</p>
            <p className="gray"><span className="font-weight-bold text-dark hover">{username}</span> -{caption}</p>
            <p className="gray">Ver todos os {comments} comentários</p>
          </div>

          <div className="d-flex justify-content-between align-items-center post-comentar">
            <span className="px-1 icon">{emoji}</span>
            <input className="px-1" type="text" placeholder="Fazer um comemtário...." />
            <span className="px-1 blue hover" >Publicar</span>
          </div>



        </div>

      </div>

    </div>




  );
}

export default Post;