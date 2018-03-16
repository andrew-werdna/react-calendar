import {
    getCurrentState,
    initialState
} from "../initialState";

const viewReducer = (state = initialState.settings, action) => {

    let newState = getCurrentState(state);

    switch (action.type) {
        case 'SET_VIEW':

            newState.view.current = action.payload;
            return newState;

        default:
            return state;
    }

}

export default viewReducer;
