import React, { useState } from 'react';
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
    ];

    const colorOptions = [
        {
            label: "Red",
            value: "red"
        },
        {
            label: "Green",
            value: "green"
        },
        {
            label: "Blue",
            value: "blue"
        }
    ];

    const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown options={colorOptions} label="Select a Color" selectedColor={selectedColor} onSelectedChange={setSelectedColor} />
        </div>
    );
};

export default App;
