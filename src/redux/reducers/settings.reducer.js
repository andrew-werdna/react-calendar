import {
    getCurrentState,
    initialState
} from "../initialState";

const viewReducer = (state = initialState.settings, action) => {

    switch (action.type) {
        case 'SET_MONTH_VIEW':
        case 'SET_WEEK_VIEW':
        case 'SET_DAY_VIEW':

            let newState = getCurrentState(state);
            newState.view.current = action.payload;
            return newState;

        default:
            return state;
    }

}

export default viewReducer;
