import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../api/youtube_api';
import './Stylesheet.css';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState("");

    const onQueryChange = (query) => {
        setQuery(query);
    };

    // watch for query update and search accordingly
    useEffect(() => {
        const search = async () => {
            const { data } = await youtube.get("/search", {params: {q:query}});
            setVideos(data.items);
            setSelectedVideo(data.items[0]);
        }

        const timerID = setTimeout(() => {
            if (query) {
                search();
            }
        }, 1000);

        return (() => {
            clearTimeout(timerID);
        });

    }, [query]);

    const onVideoClick = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="ui container">
            <SearchBar onQueryChange={onQueryChange} />
            <div className="content">
                {selectedVideo? <VideoDetail video={selectedVideo} />:null}
                {videos? <VideoList videos={videos} onVideoClick={onVideoClick} />:null}
            </div>
        </div>
    );
};

export default App;