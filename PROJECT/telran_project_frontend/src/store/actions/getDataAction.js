import axios from 'axios';

export const getDataAction = (url, getType, getError) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(url);
            dispatch({ type: getType, payload: response.data })
        } catch (e) {
            dispatch({ type: getError, error: e.message })
        }
    };
}