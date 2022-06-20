import React, { useState } from "react";
import Comments from "./Comments";

function CommentsButton({ video }) {
    const [showComment, setShowComment] = useState(false);

    function handleCommentBtn() {
        setShowComment(!showComment);
    }

    return (
        <div>
            <button onClick={handleCommentBtn} >{showComment ? "Hide Comments" : "Show Comments"}</button>
            {showComment ? <Comments video={video}/> : null}
        </div>

    );
}

export default CommentsButton;