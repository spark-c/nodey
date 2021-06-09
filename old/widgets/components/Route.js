import {useEffect, useState} from 'react';


const Route = (props) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname); // purely to prompt component to rerender. see below useEffect()

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname); // this is here just to prompt the component to rerender itself.
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, [] );

    return window.location.pathname === props.path ? props.children:null;
};

export default Route;