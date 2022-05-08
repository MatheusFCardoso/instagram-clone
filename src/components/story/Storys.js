import React, { useState } from "react";
import "../Bootstrap/Bootstrap.css"
import "./Story.css";
import Story from "./Story";

import { Carousel } from '@trendyol-js/react-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


function Storys(){

  const left = <FontAwesomeIcon icon={faAngleLeft}/>
  const right = <FontAwesomeIcon icon={faAngleRight}/>

    const [storys] = useState([
        {
          username: "rust",
          imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png",
        },
        {
          username: "java_scr...",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          username: "react_js",
          imageUrl:
            "https://ionicframework.com/docs/icons/logo-react-icon.png",
        },
        {
          username: "type_script",
          imageUrl:
            "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
        },
        {
          username: "python",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        },
        {
          username: "node_js",
          follow: "Seguido(a) por java_script",
          imageUrl:
            "https://img2.gratispng.com/20180410/qgw/kisspng-node-js-javascript-database-mongodb-native-5acd4ebf6b4b75.3634484415234044794395.jpg",
        },
        {
          username: "c++",
          follow: "Seguido(a) por java_script",
          imageUrl:
            "https://www.nicepng.com/png/detail/111-1116276_computer-science-i-syllabus-and-grading-policy-c.png",
        },
        {
          username: "curso...",
          follow: "Seguido(a) por java_script",
          imageUrl:
            "https://avatars.githubusercontent.com/u/8683385?s=200&v=4",
        },
        {
          username: "html_5",
          imageUrl:
            "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
        },
        {
          username: "java",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png",
        },
      ]);

    return(
      <div className="col-md-7 col-12 margin">
        <div className="align-items-center story">
          <div className="px-2 py-2">
            <ul className="d-flex align-items-center list-unstyled list">

              <Carousel show={8.0} swipeOn={3} infinite={true} slide={4} swiping={true} rightArrow={right} leftArrow={left}>    

                {storys.map((stor)=>(
                <Story
                username={stor.username}
                imageUrl={stor.imageUrl}
                />))}

            </Carousel>

          </ul>
        </div>
      </div>
          
          

        

      

    </div>

                            
    );
}

export default Storys;