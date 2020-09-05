import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./Posts";
import { db } from "./firebase";

function App() {
  const [posts, setPost] = useState([]);

  // useEffect : Runs a piece of code based on a specific condition.
  // runs everytime the variable post changes
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      // every single time a new post is added, this code fires.
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, [posts]);

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

      {posts.map((post) => (
        <Posts
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
