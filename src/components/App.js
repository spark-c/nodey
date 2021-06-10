import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import './stylesheet.css';


const App = () => {

    return (
        <div className="container">
            <SongList />
            <SongDetail />
        </div>
    );
};

export default App;