import React from 'react';


const VideoDetail = ({ video }) => {


    const dateString = (pubDate) => {
        const str = new Date(pubDate);
        return `Published ${str.getMonth()}-${str.getDate()}-${str.getFullYear()}`;
    };

    return (
        <div className="detail">
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}>{video.snippet.title}</iframe>
            </div>
            <div className="ui segment">
                <h4 className="title">
                    {video.snippet.title}<br/>
                    <span className="unbold">{video.snippet.channelTitle}</span>
                </h4>
                <p className="description">{video.snippet.description}</p>
                <p className="meta">{dateString(video.snippet.publishedAt)}</p>
            </div>
        </div>
    );
}

export default VideoDetail;