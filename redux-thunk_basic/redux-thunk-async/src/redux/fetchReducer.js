const initialState = {
    items: [],
    loading: false,
    error: null
};

const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_POST_REQUEST":
            return state = {
                ...state,
                loading: true,
                error: null
            }
        case "FETCH_POST_SUCCESS":
            return state = {
                ...state,
                loading: false,
                error: null,
                items: action.payload
            }
        case "FETCH_POST_FAILURE":
            return state = {
                ...state,
                loading: false,
                items: [],
                error: action.error
            }
        default:
            return state
    }
};

export default fetchReducer;