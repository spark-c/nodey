import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import SongItem from './SongItem';


class SongList extends React.Component { // = ({ songs, onSongSelect }) => {
    
    renderList() {
        return (
            this.props.songs.map(song => {
                return <SongItem song={song} key={song.title} onClick={() => this.props.selectSong(song)} />;
            })
        );
    };

    render() {
        console.log(this.props);
        return (
            <div className="song-list">
                <hr />
                {this.renderList()}
            </div>
        );
    };
};

// the below code is always how we will connect our component to the Redux Store
const mapStateToProps = (state) => {
    return { songs: state.songs, selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, { // connect() is a special react-redux component; enables communication between this component and Redux Store (Provider)
    selectSong: selectSong // since key and value are identical, this COULD be shortened to simply { selectSong }. ES2015 syntax
})(SongList); // connect() returns a function, which is then called with (SongList)
