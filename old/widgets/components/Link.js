import React from 'react';

const Link = (props) => {

    // implementing custom link/navigation behavior
    const onLinkClick = (e) => {
        // this handles the case of command-click or ctrl-click, which should open a new tab.
        // in this case, we return early and ALLOW THE DEFAULT behavior of anchor -> new tab.
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        window.history.pushState({}, "", props.path); // this just updates the URL, no other changes

        // create a new event to tell our Route components that the url / location has changed.
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={props.className} href={props.path} onClick={(e) => onLinkClick(e)}>{props.children}</a>
    );
};

export default Link;