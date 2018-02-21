import {
    getCurrentState,
    initialState
} from "../initialState";

const monthReducer = (state = initialState.calendar, action) => {

    switch (action.type) {
        case 'SET_PRESENT_MOMENT':

            let newState = getCurrentState(state);
            newState.now = action.payload;
            return newState;

        default:
            return state;
    }

}

export default monthReducer;


