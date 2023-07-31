import axios from 'axios';

export const postAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data })
        } catch(e) {
            dispatch({ type: 'FETCH_POSTS_ERROR', error: e.message })
        }
    }
}

export const deletePost = (postId) => {
    return async(dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

            dispatch({ type: 'DELETE_POSTS_SUCCESS', payload: postId });
        } catch(e) {
            dispatch({ type: 'DELETE_POSTS_ERROR', error: e.message })
        } 
    } 
}