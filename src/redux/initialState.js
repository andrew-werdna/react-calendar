export const initialState = {
    events: [],
    settings: {
        view: "month"
    }
};

export const getCurrentState = (state = initialState) => {
    return Object.assign({}, state);
};