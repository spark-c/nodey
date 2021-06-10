import {combineReducers} from 'redux';


const songsReducer = () => {

    return [
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
    ];
};


const selectedSongReducer = (selectedSong={title:"Select a song to the left!", length:""}, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});