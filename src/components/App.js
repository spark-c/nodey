import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// import api access token


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => { // need arrow function here to fix "this" error
        const response = await unsplash.get( // This is a reference to our custom axios in unsplash.js
            "https://api.unsplash.com/search/photos", {
                params: { query: term }      
            }
        );

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '5vh' }}>
                <SearchBar onSubmit={this.onSearchSubmit} /> {/* onSubmit here is not the exact same as an HTML onSubmit prop,
                                                                    and we can name it whatever we like */}
                {this.state.images.length > 0 ? `Found ${this.state.images.length} images!`:""}
                <ImageList images={this.state.images} />
            </div>
        );
    }  
}

export default App;