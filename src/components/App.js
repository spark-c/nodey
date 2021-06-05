import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';
import youtube_api from '../api/youtube_api';
import './Stylesheet.css';


class App extends React.Component {
    state = { selectedVideo: null, videoResults: [] };

    onQuerySubmit = async (query) => {
        const response = await youtube_api.get("/search", {
            params: {
                q: query
            }
        });

        this.setState({ videoResults: response.data.items})
        console.log(`results: ${this.state.videoResults}`)
    };


    onVideoItemClick = (videoItem) => {
        this.setState({ selectedVideo: videoItem.props.video });
        console.log(videoItem.props.video.title);
    };

    
    render() {

        const showDetail = (this.state.selectedVideo)? <VideoDetail video={this.state.selectedVideo} /> : "";

        return (
            <div className='ui container'>
                <SearchBar onSubmit={this.onQuerySubmit} />
                <div className="content">
                    {showDetail}
                    <VideoList className="video-list" onVideoItemClick={this.onVideoItemClick} videos={this.state.videoResults} />
                </div>
            </div>
        );
    };
}

export default App;