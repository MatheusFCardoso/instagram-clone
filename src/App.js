import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Bottombar from "./components/navbar/Bottombar"
import Post from "./components/posts/Post"
import Sidenav from "./components/side.nav/Sidenav";
import Storys from "./components/story/Storys";
import '../src/components/Bootstrap/Bootstrap.css'
import './App.css';

function App() {
  const [posts] = useState([
    {
      username: "java_script",
      caption: "conosole.log('Hello world!')",
      imageUrl:
        "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
      perfil: 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
      comments: 1.032,
      like: 445.432
    },
    {
      username: "react_js",
      caption: "A JavaScript library for building user interfaces",
      imageUrl:
        "https://media.bitdegree.org/storage/media/images/2018/10/The-Most-Essential-React-Interview-Questions.jpg",
      perfil:
        "https://ionicframework.com/docs/icons/logo-react-icon.png",
      comments: 2.342,
      like: 345.418
    },
    {
      username: "java",
      caption: "System.out.println('Hello, World!');",
      imageUrl:
        "https://soujavablog.files.wordpress.com/2020/02/design-sem-nome-2-1.png?w=1024",
      perfil:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
    },
    {
      username: "python",
      caption: "print('Hello world!')",
      imageUrl:
        "https://i0.wp.com/blog.dsacademy.com.br/wp-content/uploads/2020/02/Por-Que-a-Linguagem-Python-e-Tao-Popular-em-Machine-Learning-e-Inteligencia-Artificial.jpg?fit=570%2C320&ssl=1",
      perfil:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
    },
    {
      username: "curso_em_video",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://i.ytimg.com/vi/7q6aj5idjwY/maxresdefault.jpg",
      perfil:
        "https://avatars.githubusercontent.com/u/8683385?s=200&v=4"
    },
    {
      username: "node_js",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://www.freecodecamp.org/portuguese/news/content/images/size/w2000/2022/01/Slice-3-2-.jpg",
      perfil:
        "https://img2.gratispng.com/20180410/qgw/kisspng-node-js-javascript-database-mongodb-native-5acd4ebf6b4b75.3634484415234044794395.jpg"
    },
    
  ]);



  return (
    <div className="App">
        <Bottombar/>
        <Navbar />

        <div className="container">
          <div className="row">
            <Sidenav/> 
            <Storys/>
            {posts.map((post)=>(
              <Post
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              perfil={post.perfil}
              comments={post.comments}
              like={post.like}/>
            ))}
          </div>
        </div>  

      </div>
  );
}

export default App;
