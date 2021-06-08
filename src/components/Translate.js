import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const languageOptions = [
    {
        label: "Russian",
        value: 'ru'
    },
    {
        label: "Arabic",
        value: 'ar'
    },
    {
        label: "Hindi",
        value: 'hi'
    }
];

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
    const [query, setQuery] = useState("");

    const onInputChange = (e) => setQuery(e.target.value);

    return (
        <div>
            <div className="ui form">
                <div className="ui field">
                    <label>English Input:</label>
                    <input value={query} onChange={(e) => onInputChange(e)} type="text"/>
                </div>
                <Dropdown
                label="Select Language:"
                options={languageOptions}
                selectedOption={selectedLanguage}
                onSelectedChange={setSelectedLanguage}
                />
                <hr />
                <h3>Output</h3>
                <Convert query={query} selectedLanguage={selectedLanguage.value} />
            </div>
        </div>
    );
};

export default Translate;