import React from "react";
import "./StartPost.css";
function StartPost() {
  return (
    <div className="startPost">
      <form>
        <div className="startPost__input">
          <textarea
            placeholder="Start a post"
            style={{ width: "250px", height: "150px" }}
          />
        </div>

        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default StartPost;
