import {
    getCurrentState,
    initialState
} from "../initialState";

const monthReducer = (state = initialState.calendar, action) => {

    let newState = getCurrentState(state);

    switch (action.type) {
        case 'SET_PRESENT_MOMENT':

            newState.now = action.payload;
            return newState;

        case 'SET_CREATING_EVENT':

            newState.creatingEvent = action.payload;
            return newState;

        case 'SET_EDITING_EVENT':

            newState.editingEvent = action.payload;
            return newState;

        default:
            return state;
    }

}

export default monthReducer;


