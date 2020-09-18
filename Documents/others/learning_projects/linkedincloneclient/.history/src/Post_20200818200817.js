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
          <div className="post__avatar">
            <Avatar src="https://api.adorable.io/avatars/51/abott@adorable.png" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Post;
