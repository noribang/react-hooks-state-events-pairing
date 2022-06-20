import React, { useState } from "react";
import Video from "./Video";
import Title from "./Title";
import Comments from "./Comments";
import CommentsButton from "./CommentsButton";
import ButtonVote from "./ButtonVote";

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
      <ButtonVote video={videoData} />
      <CommentsButton video={videoData} />
    </div>
  );
}

export default App;
