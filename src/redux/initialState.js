export const initialState = {
    events: [],
    settings: {
        view: {
            current: "Month",
            choices: [
                "Month",
                "Day"
            ]
        }

    }
};

export const getCurrentState = (state = initialState) => {
    return Object.assign({}, state);
};
