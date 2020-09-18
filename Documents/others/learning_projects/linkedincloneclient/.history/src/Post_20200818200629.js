import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://api.adorable.io/avatars/51/abott@adorable.png" />
      </div>
    </div>
  );
}

export default Post;
