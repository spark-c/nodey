import React, { useState } from 'react';
import NavBar from './NavBar';
import Route from './Route';
import Translate from './Translate';
import Dropdown from './Dropdown';
import Search from './Search';
import Accordion from './Accordion';


const App = () => {

    // ACCORDION config //
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

    // DROPDOWN config //
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
            <NavBar />
            <Route path="/">
                <Accordion items={items} /> 
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown options={colorOptions} label="Select a Color" selectedOption={selectedColor} onSelectedChange={setSelectedColor} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>  
            
        </div>
    );
};

export default App;
