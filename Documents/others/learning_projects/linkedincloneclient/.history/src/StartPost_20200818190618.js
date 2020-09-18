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
          <div className="startPost__menu__content">
            <span>
              <PhotoIcon />
            </span>
            <button>Photo</button>
          </div>
          <div className="startPost__menu__content">
            <span>
              <PhotoIcon />
            </span>
            <button>Video</button>
          </div>
          <div className="startPost__menu__content">
            <span>
              <PhotoIcon />
            </span>
            <button>Document</button>
          </div>
          <div className="startPost__menu__content">
            <span>
              <PhotoIcon />
            </span>
            <button>Write article</button>
          </div>
        </div>

        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default StartPost;
