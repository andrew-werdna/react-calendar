import {
    getCurrentState,
    initialState
} from "../initialState";

const viewFilter = (state = 'MONTH', action) => {

    switch (action.type) {
        case 'SET_MONTH_VIEW':
        case 'SET_DAY_VIEW':
            return action.view
            break;

        default:
            return state;
    }

}

export default viewFilter;
