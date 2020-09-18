import React from "react";
import "./StartPost.css";
function StartPost() {
  return (
    <div className="startPost">
      <form>
        <div className="startPost__input">
          <textarea placeholder="Start a post" rows="2" cols="70" />
        </div>

        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default StartPost;
