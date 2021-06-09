import React, { useState } from 'react';



const SearchBar = (props) => {
    const [text, setText] = useState("");

    const preventDefault = (e) => {
        e.preventDefault();
    };

    const onInputChange = (e) => {
        props.onQueryChange(e.target.value);
        setText(e.target.value);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={preventDefault}>
                <label>Video Search</label>
                <input type='text' value={text} onChange={e => onInputChange(e)} />
            </form>
        </div>
    );
};

export default SearchBar;