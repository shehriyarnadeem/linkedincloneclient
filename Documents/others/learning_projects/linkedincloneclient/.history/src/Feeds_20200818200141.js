import React from "react";
import StartPost from "./StartPost";
import Post from "./Post";
import "./Feeds.css";

function Feeds() {
  return (
    <div className="feeds">
      <StartPost />
      <Post />
    </div>
  );
}

export default Feeds;
