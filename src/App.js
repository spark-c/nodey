import React, {useState} from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import './stylesheet.css';


const App = () => {
    const [song, setSong] = useState({title:"SONG-TITLE", length: "SONG-LENGTH"});

    const songs = [
        {
            title: "Twist and Shout",
            length: "3:20"
        },
        {
            title: "Brown-Eyed Girl",
            length: "4:12"
        },
        {
            title: "Rich Man",
            length: "2:54"
        },
        {
            title: "Gooey",
            length: "4:49"
        }
    ]

    return (
        <div className="container">
            <SongList songs={songs} onSongSelect={setSong} />
            <SongDetail song={song}  />
        </div>
    );
};

export default App;