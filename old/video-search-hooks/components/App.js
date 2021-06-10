import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos.js';
import './Stylesheet.css';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [query, setQuery] = useState("");
    // custom hook useVideos abstracts search logic
    const [videos, search] = useVideos("");


    // watch for query update and search accordingly
    useEffect(() => {
        const timerID = setTimeout(() => {
            if (query) {
                search(query);
            }
        }, 1000);

        return (() => {
            clearTimeout(timerID);
        });

    }, [query]);

    // autoselect first video from results
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);


    return (
        <div className="ui container">
            <SearchBar onQueryChange={setQuery} />
            <div className="content">
                {selectedVideo? <VideoDetail video={selectedVideo} />:null}
                {videos? <VideoList videos={videos} onVideoClick={setSelectedVideo} />:null}
            </div>
        </div>
    );
};

export default App;