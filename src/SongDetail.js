import React from 'react';


const SongDetail = ({ song }) => {

    return (
        <div className="song-detail">
            <div className="detail-container">
                <h3 className="detail title">{song.title}</h3>
                <p className="detail length">{song.length}</p>
            </div>
        </div>
    );
};

export default SongDetail;