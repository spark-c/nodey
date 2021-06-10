import React from 'react';


const SongItem = ({ song, onSongSelect }) => {

    return (
        <div className="song-item" onClick={() => onSongSelect(song)}>
            <p className="title">{song.title}</p>
            <p className="length">{song.length}</p>
            <hr />
        </div>
    );
};

export default SongItem;