import axios from 'axios';

const KEY = require("./youtube_key.json")["accessKey"];

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }// query will be supplied in App.js when we actually make the request
});