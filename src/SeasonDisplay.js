import React from 'react';
import './SeasonDisplay.css';



const seasonConfig = {
    summer: {
        quote: "Summer has arrived!",
        iconName: "sun"
    },
    winter: {
        quote: "It's winter out there!",
        iconName: "snowflake"
    }
}


const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'; // js ternary expression! (expression ? TrueResult : FalseResult)
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {quote, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <div><h1 className=''>{quote}</h1></div>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;