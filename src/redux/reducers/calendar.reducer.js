import {
    getCurrentState,
    initialState
} from "../initialState";

const monthReducer = (state = initialState.calendar, action) => {

    let newState;

    switch (action.type) {
        case 'SET_PRESENT_MOMENT':

            newState = getCurrentState(state);
            newState.now = action.payload;
            return newState;

        case 'SET_CREATING_EVENT':

            newState = getCurrentState(state);
            newState.creatingEvent = action.payload;
            return newState;

        case 'SET_EDITING_EVENT':

            newState = getCurrentState(state);
            newState.editingEvent = action.payload;
            return newState;

        default:
            return state;
    }

}

export default monthReducer;


