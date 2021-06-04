import React from 'react';
import VideoItem from './VideoItem.js';

class VideoDetail extends React.Component {
    state = { video: {} }



    render() {

        return (
            <div className="detail" style={{border: "2px solid red"}}>
                <div className="embed">{this.props.video.title}</div>
                <VideoItem video={this.props.video} />
            </div>
        );
    }
}

export default VideoDetail;