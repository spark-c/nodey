import React from 'react';
import { connect } from 'react-redux';


const SongDetail = (props) => {

    return (
        <div className="song-detail">
            <div className="detail-container">
                <h3 className="detail title">{props.selectedSong.title}</h3>
                <p className="detail length">{props.selectedSong.length}</p>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);