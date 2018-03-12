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

        case 'SET_CREATING_EVENT':

            let newState = getCurrentState(state);
            newState.creatingEvent = action.payload;
            return newState;

        case 'SET_EDITING_EVENT':

            let newState = getCurrentState(state);
            newState.editingEvent = action.payload;
            return newState;

        default:
            return state;
    }

}

export default monthReducer;


