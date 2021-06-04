// Abstracts away some of the configuration for axios requests out of App.js

import axios from 'axios';


//import api access token
const unsplash_key = require('../components/unsplash_key.json')['Access Key'];

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${unsplash_key}`
    }
});