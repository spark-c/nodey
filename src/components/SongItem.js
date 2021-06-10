import React from 'react';


const SongItem = ({ song, onClick }) => {

    return (
        <div className="song-item" onClick={onClick}>
            <p className="title">{song.title}</p>
            <p className="length">{song.length}</p>
            <hr />
        </div>
    );
};

export default SongItem;