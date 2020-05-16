import React from "react";
import "../styles.css";

const VideoCard = ({ video, onVideoSelect }) => {
  return (
    //We want to pass '() => onvideoSelect(video)' as an arrow function in order for us to pass down (video) eachtime we click on a video image.
    <div onClick={() => onVideoSelect(video)} className="video-card item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          <h3>{video.snippet.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
