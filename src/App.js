import React, { useState } from "react";
import "./App.css";
import Posts from "./Posts";

function App() {
  const [posts, setPost] = useState([
    {
      username: "cleverid",
      caption: "Wow it is so cute!",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522_1280.jpg"
    },
    {
      username: "heyyy",
      caption: "DDPE",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_1280.jpg"
    },
    {
      username: "roda",
      caption: "This is a fun project",
      imageUrl:
        "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg"
    }
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="add__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>

      <h1>Hello Instagam Clone App! 🚀</h1>

      {posts.map((post) => 
        <Posts
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      )}

    </div>
  );
}

export default App;
