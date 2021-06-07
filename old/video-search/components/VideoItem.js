import React from 'react';

class VideoItem extends React.Component {


    render() {
        const pubDate = new Date(this.props.video.snippet.publishedAt);

        return (
            <div className="video-item" onClick={() => this.props.onVideoItemClick(this)}>
                <img className="thumbnail" src={this.props.video.snippet.thumbnails.default.url} alt="thumbnail" ></img>
                <div className="text-data">
                    <div className="title">{this.props.video.snippet.title}</div> {/* this.props.video.title */}
                    <div className="channel">{this.props.video.snippet.channelTitle}</div> {/* this.props.video.author */}
                    <div className="metadata">
                        <div className="timestamp">{`Published ${pubDate.getMonth()}-${pubDate.getDate()}-${pubDate.getFullYear()}`}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;