import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const searchWiki = async () => {
            await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: query
                }
            });
        };
        searchWiki();
    }, [query]);

    return (
        <div className="ui form">
            <div className="field">
                <label>Wikipedia Search</label>
                <input className="input" onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Search..." />
            </div>
        </div>
    );
};

export default Search;