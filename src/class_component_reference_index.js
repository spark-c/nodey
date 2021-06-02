import React from 'react';
import ReactDOM from 'react-dom';


// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
    // (position) => console.log(position),
    // (err) => console.log(err)
// )

//     return (
//         <div>Your Latitude is: {latitude}</div>
//     );
// };

// ReactDOM.render(<App />, document.querySelector('#root'));


class App extends React.Component {
    constructor(props) { // like __init__(self) in python
        super(props); // Calls constructor function of parent class (React.Component)
        this.state = { lat: null, errMsg: '' }; // initializes state! (this.state = object)
    }

    // Alternative way of initializing state and constructor
    // BABEL takes care of generating the entire constructor function, including properly initializing state.
    // The below line is effectively identical to the above constructor function.

    // state = { lat: null, errMsg: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }), // setState() takes a js object
            (err) => this.setState({ errMsg: err.message })
        );
    }

    // Required by React to show how to render the component
    render() {
        if (this.state.lat && !this.state.errMsg) {
            return <div>Latitude: {this.state.lat}</div>;

        } else if (!this.state.lat && this.state.errMsg) {
            return <div>There was an error! Message: {this.state.errMsg}</div>;

        } else {
            return <div>Fetching location data...</div>;
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))