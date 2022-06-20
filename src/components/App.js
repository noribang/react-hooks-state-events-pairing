import React, { useState } from "react";
import Video from "./Video";
import Title from "./Title";

import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);
  const [videoData, setVideoData] = useState(video);

  return (
    <div className="App">
      <Video />
      <Title 
        title={videoData.title} 
        views={videoData.views} 
        createdAt={videoData.createdAt} 
      />
      <br/>
      <div>
        <button style={{fontSize:18, color:'black'}}>{video.upvotes}<i class="fa fa-thumbs-up"></i></button>
        <button style={{fontSize:18, color:'black'}}>{video.downvotes}<i class="fa fa-thumbs-down"></i></button>
      </div>  

      <div>
        <button>Hide Comments</button>
      </div>
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
    
    </div>
  );
}

export default App;
