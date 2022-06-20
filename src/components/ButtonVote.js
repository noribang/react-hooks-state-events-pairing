import React, { useState } from "react";

function ButtonVote({ video }) {
    const [upVote, setUpVote] = useState(video.upvotes);
    const [downVote, setDownVote] = useState(video.downvotes);

    function handleUpVote() {
        setUpVote((upVote) => upVote + 1 );
    }

    function handleDownVote() {
        setDownVote((downVote) => downVote + 1);
    } 

    return (
        <div>
            <button onClick={handleUpVote} style={{fontSize:18, color:'black'}}>{upVote}<i class="fa fa-thumbs-up"></i></button>
            <button onClick={handleDownVote} style={{fontSize:18, color:'black'}}>{downVote}<i class="fa fa-thumbs-down"></i></button>
        </div>
    );
}

export default ButtonVote;