import React from 'react';

class VideoItem extends React.Component {


    render() {
        return (
            <div className="video-item" onClick={() => this.props.onVideoItemClick(this)}>
                <img className="thumbnail" src="" alt="thumbnail" ></img>
                <div className="text-data">
                    <div className="title">Title</div> {/* this.props.video.title */}
                    <div className="channel">By Channel Name</div> {/* this.props.video.author */}
                    <div className="metadata">
                        <div className='views'>9999 Views</div>
                        <div className="timestamp">1 Month Ago</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;