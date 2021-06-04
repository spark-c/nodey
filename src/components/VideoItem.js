import React from 'react';

class VideoItem extends React.Component {


    render() {
        return (
            <div className="video-item ui card" onClick={() => this.props.onVideoItemClick(this)}>
                {this.props.video.title}
            </div>
        );
    }
}

export default VideoItem;