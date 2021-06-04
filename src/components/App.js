import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';
import './Stylesheet.css';


class App extends React.Component {
    state = { selectedVideo: null };

    onFormSubmit = (event) => {
        event.preventDefault();

    }


    onVideoItemClick = (videoItem) => {
        this.setState({ selectedVideo: videoItem.props.video })
        console.log(videoItem.props.video.title)
    }

    
    render() {

        const showDetail = (this.state.selectedVideo)? <VideoDetail video={this.state.selectedVideo} /> : "" 

        return (
            <div className='ui container'>
                <SearchBar onSubmit={this.onFormSubmit} />
                <div className="content">
                    {showDetail}
                    <VideoList className="video-list" onVideoItemClick={this.onVideoItemClick} />
                </div>
            </div>
        );
    }
}

export default App;