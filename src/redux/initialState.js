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
        },
        api: {
            events: "http://localhost:4000/events"
        }
    }
};

export const getCurrentState = (state = initialState) => {
    return Object.assign({}, state);
};

export const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
