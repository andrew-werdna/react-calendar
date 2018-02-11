export const initialState = {
    events: [],
    view: "month"
};

export const getCurrentState = (state = initialState) => {
    return Object.assign({}, state);
};