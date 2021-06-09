import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoClick }) => {

    const renderedVideos = videos.map((video) => {
        return <VideoItem video={video} onVideoClick={onVideoClick} key={video.id.videoId} />;
    });

    return (
        <div className="video-list">
            {renderedVideos}
        </div>
    );
};

export default VideoList;