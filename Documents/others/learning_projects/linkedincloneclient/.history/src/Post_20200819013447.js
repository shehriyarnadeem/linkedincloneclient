import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar } from "@material-ui/core";
import "./Post.css";
function Post() {
  return (
    <Card>
      <CardContent>
        <div className="post">
          <div className="post__avatar profileCard__avatar">
            <img
              src="https://api.adorable.io/avatars/51/abott@adorable.png"
              // className="profileCard__avatar"
            />
            <div className="post_info">
              <h1>Ammad Khan</h1>
              <p>Sr. Talen engineer mikaels labs</p>
              <p>2 h</p>
            </div>
          </div>
        </div>
        <div className="post__text">
          <p>sdsd</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Post;
