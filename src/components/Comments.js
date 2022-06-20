import React, { useState } from "react";

function Comments({ video }) {

    return (
        <>
        {/* <div>
            <button>Hide Comments</button>
        </div> */}
        <hr></hr>
        <div>
            <h2>{`${video.comments.length} `}Comments</h2>

            {video.comments.map((comment, index) => {
            return (
                <div key={index}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
                </div>
            )
            })}

        </div>
        </>
    );
}

export default Comments;