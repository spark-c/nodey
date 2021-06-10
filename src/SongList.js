import React from 'react';
import SongItem from './SongItem';


const SongList = ({ songs, onSongSelect }) => {

    const renderItems = songs.map(song => {
        return <SongItem song={song} onSongSelect={onSongSelect} key={song.title} />
    });

    return (
        <div className="song-list">
            <hr />
            {renderItems}
        </div>
    );
};

export default SongList;