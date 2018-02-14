export const initialState = {
    events: [],
    settings: {
        view: {
            current: "Month",
            choices: [
                "Month",
                "Week",
                "Day"
            ]
        }

    }
};

export const getCurrentState = (state = initialState) => {
    return Object.assign({}, state);
};
