import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// import api access token
const unsplash_key = require('./unsplash_key.json')['Access Key'];

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get(
            "https://api.unsplash.com/search/photos", {
                params: { query: term },
                headers: {
                    Authorization: `Client-ID ${unsplash_key}`
                }        
            }
        );
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '5vh' }}>
                <SearchBar onSubmit={this.onSearchSubmit} /> {/* onSubmit here is not the exact same as an HTML onSubmit prop,
                                                                    and we can name it whatever we like */}
                <ImageList />
            </div>
        );
    }  
}

export default App;