import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./ProfileCard.css";
function ProfileCard() {
  return (
    <Card className="profileCard">
      <CardContent>
        {/* cover */}
        <div className="profileCard__display">
          <img src="https://dummyimage.com/300/09f/fff.png" alt="" />
        </div>
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
