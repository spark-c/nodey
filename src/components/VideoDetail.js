import React from 'react';
import VideoItem from './VideoItem.js';


const VideoDetail = (props) => {
    const pubDate = new Date(props.video.snippet.publishedAt);

    return (
        <div className="detail">
            <div className="video-container">
                <div className="ui embed">
                    <iframe src={`https://youtube.com/embed/${props.video.id.videoId}`} />    
                </div>
            </div>
            <div className="ui segment">
                <h4>
                    {props.video.snippet.title}<br/>
                    <span className="unbold">{props.video.snippet.channelTitle}</span>
                </h4>
                <p>{props.video.snippet.description}</p>
                <p>{`Published ${pubDate.getMonth()}-${pubDate.getDate()}-${pubDate.getFullYear()}`}</p>
            </div>
            {/* <VideoItem video={this.props.video} /> */}
        </div>
    );
}

export default VideoDetail;