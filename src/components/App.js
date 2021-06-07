import React from 'react';
import Dropdown from './Dropdown';
// import Search from './Search';
// import Accordion from './Accordion';


const App = () => {
    const items = [
        {
            title: "What is React?",
            content: "React is a front end javascript framework"
        },
        {
            title: "Why use React?",
            content: "React is a favorite JS library amongst engineers"
        },
        {
            title: "How do you use React?",
            content: "You use React by creating components"
        }
    ]

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown />
        </div>
    );
};

export default App;
