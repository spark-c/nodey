import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    state = { lat: null, errMsg: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMsg: err.message })
        );
    }


    renderHelper() {
        if (this.state.lat && !this.state.errMsg){
            return <SeasonDisplay latitude={this.state.lat} loading="" />;

        } else if (!this.state.lat && this.state.errMsg) {
            return <div><h1>There was an error! Message: {this.state.errMsg}</h1></div>

        } else {
            return <Loader message="Please enable location data!" />;
        }
    }


    render() { // conditional logic abstracted away into helper method this.renderHelper()
        return this.renderHelper()
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));