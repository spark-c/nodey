import React, {useEffect, useState} from 'react';
import axios from 'axios';

// THIS KEY ONLY WORKS ON LOCALHOST:3000 //
const TRANSLATE_KEY = require("../api/translate.json")["translate_key"];


const Convert = (props) => {
    const [output, setOutput] = useState("");

    useEffect( () => {
        const translate = async () => {
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: props.query,
                    target: props.selectedLanguage,
                    key: TRANSLATE_KEY
                }
            });

            // console.log("SENDING REQUEST...");
            // const data = {translations: [{translatedText: `${props.query} but in ${props.selectedLanguage} instead of English...`}]}
            setOutput(data.data.translations[0].translatedText)
        };

        const timerID = setTimeout(() => {
            if (props.query) {
                translate();
            };
        }, 1000);

        return ( () => {
            clearTimeout(timerID);
        });

    }, [props.query, props.selectedLanguage]);


    return (
      <div>
          <div>{output}</div>
      </div>  
    );
};

export default Convert;