import {
    getCurrentState,
    initialState
} from "../initialState";

const viewReducer = (state = initialState.settings, action) => {

    switch (action.type) {
        case 'SET_VIEW':

            let newState = getCurrentState(state);
            newState.view.current = action.payload;
            return newState;

        default:
            return state;
    }

}

export default viewReducer;
