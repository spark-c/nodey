import jsonplaceholder from '../api/jsonplaceholder';


export const fetchPosts = () => {

    return async (dispatch) => { // redux thunk passes in the dispatch function for our use, manually dispatching action
        const resopnse = await jsonplaceholder.get('/posts');

        dispatch({type: "FETCH_POSTS", payload: response});
    };

};

// SEE BELOW, equivalent / frequently-used syntax. ES2015 conventions for shortening/simplifying.

// export const fetchPosts = () => async dispatch => {
//     const resopnse = await jsonplaceholder.get('/posts');

//     dispatch({type: "FETCH_POSTS", payload: response});
// };