import React from 'react';


const VideoItem = ({ video, onVideoClick }) => {

    const dateString = (pubDate) => {
        const str = new Date(pubDate);
        return `Published ${str.getMonth()}-${str.getDate()}-${str.getFullYear()}`;
    };


    return (
        <div className="video-item" onClick={() => onVideoClick(video)}>
            <img className="thumbnail" src={video.snippet.thumbnails.default.url} alt={`${video.snippet.title} thumbnail`} />
            <div className="text-content">
            <div className="title">{video.snippet.title}</div>
                <div className="channel-title"><span className="unbold">{video.snippet.channelTitle}</span></div>
                <div className="metadata">
                    <div>{dateString(video.snippet.publishedAt)}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;