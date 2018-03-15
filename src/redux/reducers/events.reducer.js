import {
    getCurrentState,
    initialState
} from "../initialState";

const eventReducer = (state = initialState.events, action) => {

    let newState = getCurrentState(state);

    switch (action.type) {
        case 'EVENT_CREATE':

            newState.collection.push(action.payload);
            return newState;

        case 'EVENT_EDIT':

            let _current = newState.collection.find((event) => {
                return event.id === action.payload;
            });

            if (_current !== -1) {
                newState.current = _current;
            }
            else {
                newState.current = {};
            }

            return newState;

        case 'EVENT_DELETE':

            let _index = newState.collection.findIndex((event) => {
                return event.id === action.payload;
            });

            if (_index !== -1) {
                newState.slice(_index, 1);
            }

            return newState;

        default:
            return state;
    }

}

export default eventReducer;
