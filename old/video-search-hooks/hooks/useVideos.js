import { useState, useEffect } from 'react';
import youtube from '../api/youtube_api';


const useVideos = (query) => {
    const [videos, setVideos] = useState([]);

    const search = async (query) => {
        const { data } = await youtube.get("/search", {params: {q:query}});
        setVideos(data.items);
    };

    useEffect(() => {
        search(query);
    }, []);

    return [videos, search];
};

export default useVideos;