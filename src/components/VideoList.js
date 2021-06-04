import React from 'react';
import VideoItem from './VideoItem.js';

class VideoList extends React.Component {


    render() {
        const videos = [{title: "Title 1", key: 1}, {title: "Title 2", key: 2}];
        const videoItems = videos.map((video) => <VideoItem video={video} key={video.key} onVideoItemClick={this.props.onVideoItemClick} />);

        return (
            <div className="video-list" style={{border: "2px solid blue"}}>
                {videoItems}
            </div>
        );
    }
}

export default VideoList;