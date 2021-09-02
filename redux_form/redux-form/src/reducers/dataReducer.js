const dataReducer = (state = {}, action) => {
    switch(action.type) {
        case "SUBMIT":
            return {...state, value: action.payload}
        default:
            return state
    }
};

export default dataReducer;