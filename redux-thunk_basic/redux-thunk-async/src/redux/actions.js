import Axios from "axios";

export const fetchPost = () => {
    return async (dispatch, getState) => {
        dispatch({type: "FETCH_POST_REQUEST"});
        try {
            const response = await Axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch({
                type: "FETCH_POST_SUCCESS",
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: "FETCH_POST_FAILURE",
                error: error
            });
        };        
    }
};