import React from 'react';

class SearchBar extends React.Component {
    state = { query: '' };


    onInputChange = (event) => {
        this.setState({ query: event.target.value });
    }


    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.props.onSubmit} className='ui form'>
                    <input onChange={this.onInputChange} value={this.state.query} className='field' type='text' placeholder='Enter your query...'></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;