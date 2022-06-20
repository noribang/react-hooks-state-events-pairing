import React from "react";

function Video() {

    return(
        <>
            <iframe
                width="700"
                height="450"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
        </>
    );
}

export default Video;