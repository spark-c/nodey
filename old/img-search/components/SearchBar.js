import React from "react";


class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => { // ATTN!! This is an arrow function because the form's onSubmit prop
                                // does not automatically pass "this" (reference to the component) into the onFormSubmit method.
                                // I don't know why. I also don't know why the arrow function construction solves the issue.
                                // Alternative solutions:
                                // (1) an inline arrow function onSubmit={ e => this.onFormSubmit(e) }
                                // (2) a constructor with the statement like so:
                                //      constructor() { this.onFormSubmit = this.onFormSubmit.bind(this) }

        event.preventDefault(); // the default form behavior is to attempt to post data to a backend, and refresh the page
        
        this.props.onSubmit(this.state.term) // in class components, we access props via "this.props"
                                             // in App.js, the function "onSubmit" is passed as a prop and then calls
                                             // the App.js onSearchSubmit() method
    }

    render() {
        return (
                <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} id="searchbar" className="ui form">
                        <label>Image Search</label>
                        <input onChange={(e) => this.setState({ term: e.target.value })} value={this.state.term} className="field" type="text" placeholder="SearchBar" />
                        {/* The onChange property above can be handled in a couple of ways:
                            1. onChange={ (event) => {console.log(event) }} // inline arrow function
                            2. onChange={onInputChange} // callback to method defined elsewhere (in this case, below)
                            2a. onInputChange(event) { console.log(event) }  */}
                    </form>
                </div>
        );
    }
}

export default SearchBar;