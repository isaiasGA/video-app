import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videos, onVideoSelect }) => {
  //We are destructuring the 'props' to have better syntax
  const renderList = videos.map(video => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
