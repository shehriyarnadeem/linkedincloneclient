import React from "react";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import "./StartPost.css";
function StartPost() {
  return (
    <div className="startPost">
      <form>
        <div className="startPost__input">
          <textarea placeholder="Start a post" rows="2" cols="70" />
        </div>
        <div className="startPost__menu">
          <span>
            <PhotoIcon />
          </span>
          <button>Photo</button>
          <span>
            <PhotoIcon />
          </span>
          <button>Photo</button>
        </div>

        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default StartPost;
