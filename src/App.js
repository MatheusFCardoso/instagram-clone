import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Post from "./components/posts/Post"
import Post2 from "./components/posts/Post2"
import Sidenav from "./components/side.nav/Sidenav";
import Story from "./components/story/Story";
import '../src/components/Bootstrap/Bootstrap.css'
import './App.css';




function App() {
  const [posts] = useState([
    {
      username: "carrot_cake",
      caption: "Felicidade!",
      imageUrl:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "mk_b_jordan",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);



  return (
    <div className="App">
        <Navbar />
        


        <div className="container">
        

        </div>
        <div className="container my-5">
          <div className="row my-5 teste">
          <Story/>
          <Sidenav/>
          
          </div>
          {posts.map((post)=>(
                <Post
                  username={post.username}
                  caption={post.caption}
                  imageUrl={post.imageUrl}
                />
              ))}
        </div>
              
        
          







          

      </div>
  );
}

export default App;
