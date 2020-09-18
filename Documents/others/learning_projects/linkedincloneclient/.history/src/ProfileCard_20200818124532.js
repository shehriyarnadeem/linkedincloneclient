import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./ProfileCard.css";
function ProfileCard() {
  return (
    <Card className="profileCard">
      <CardContent className="card__content">
        {/* cover */}
        <div className="profileCard__display">
          <img
            src="https://dummyimage.com/300/09f/fff.png"
            alt=""
            className="profileCard__cover"
          />
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            className="profileCard__avatar"
          />
        </div>

        <h1>Shehriyar Nadeem</h1>
        <p>Full stack developer (React | Node | Laravel) at Mikaels labs</p>

        <hr />

        {/* image */}
        {/* title */}
        {/* job description */}
        {/* who view profile */}
        {/* view of your post */}
        {/* saved items */}
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
