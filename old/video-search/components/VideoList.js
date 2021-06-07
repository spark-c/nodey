import React from 'react';
import VideoItem from './VideoItem.js';

class VideoList extends React.Component {


    render() {
        const videos = this.props.videos;
        const videoItems = videos.map((video) => <VideoItem video={video} key={video.id.videoId} onVideoItemClick={this.props.onVideoItemClick} />);

        return (
            <div className="video-list">
                {videoItems}
            </div>
        );
    }
}

export default VideoList;