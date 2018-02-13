import {
    getCurrentState,
    initialState
} from "../initialState";

const eventReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'EVENT_CREATE':

            let newState = getCurrentState(state);
            newState.events.push(action.event);
            return newState;

        /**
         * @todo implement the following
         * modifications to `newState`
         */
        case 'EVENT_EDIT':
        case 'EVENT_DELETE':
            return state;

        default:
            return state;
    }

}

export default eventReducer;
