import React, { useState, useRef, useEffect } from 'react';
// styling requires Semantic UI


const Dropdown = (props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {

        // conditionally toggles dropdown expansion
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) { // if click happens ON the dropdown...
                return; // then don't change open state
            };
            setOpen(false); // otherwise, attempt to close the dropdown 
        };

        // event listener for closing the dropdown if user clicks outside of it
        document.body.addEventListener('click', onBodyClick, { capture: true });

        // clean up event listener in the case the the Dropdown is de-rendered
        return (() => {
            document.body.removeEventListener('click', onBodyClick, { capture: true })
        });

    }, [] ); // first and only render of the component

    const ref = useRef(); // attached to most parent JSX elem <div className='ui form'...>


    const options = props.options.map((option) => {
        if(! (option.value === props.selectedOption.value)) {
            return (
                <option 
                className="item" 
                key={option.value} 
                value={option.value} 
                onClick={() => props.onSelectedChange(option)}>
                        {option.label}
                </option>
            );
        } else {
            return null; // NULL IN REACT means "Don't render anything!"
        };
    });

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <form>
                    <label className="label">{props.label}</label>
                    <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open? "visible active":""}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{props.selectedOption.label}</div>
                        <div className={`menu ${open? "visible transition":""}`}>
                            {options}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Dropdown;