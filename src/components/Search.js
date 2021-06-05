import React, { useState, useEffect } from 'react';
import "./Search.css"
import axios from 'axios';


const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([])

    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: query
                }
            });

            setResults(data.query.search);
        };

        const timerId = setTimeout(() => {
            if (query) {
                searchWiki();
            }
        }, 500);
        

        return () => {
            clearTimeout(timerId);
        };
    }, [query]);

    const clean = (str) => {
        return str.replaceAll("<span class=\"searchmatch\">", "").replaceAll("</span>", "");
    };

    const resultsList = results.map((result) => {
        return (
            <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                <div className="result-card" key={result.pageid}>
                    <div className="result-title">{result.title}</div>
                    <div className="result-description">{clean(result.snippet)}</div>
                </div>
            </a>
        );
    });

    return (
        <div className="search-component">
            <div className="ui form">
                <div className="field">
                    <label>Wikipedia Search</label>
                    <input className="input" onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Search..." />
                </div>
            </div>
            <div>
                {resultsList}
            </div>
        </div>
    );
};

export default Search;