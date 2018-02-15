import {
    getCurrentState,
    initialState
} from "../initialState";

const eventReducer = (state = initialState.events, action) => {

    switch (action.type) {
        case 'EVENT_CREATE':

            let newState = getCurrentState(state);
            newState.push(action.payload);
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
