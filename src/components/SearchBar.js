import React from 'react';

class SearchBar extends React.Component {
    state = { query: '' };

    onInputChange = (event) => {
        this.setState({ query: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
    }


    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <label>Video Search</label>
                    <input 
                    onChange={this.onInputChange} 
                    value={this.state.query} 
                    className='field' 
                    type='text' 
                    placeholder='Enter your query...'
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;