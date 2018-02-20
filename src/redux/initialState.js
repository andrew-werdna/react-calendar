import moment from "moment";

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
    },
    calendar: {
        now: moment()
    }
};

export const getCurrentState = (state = initialState) => {
    return Object.assign({}, state);
};

export const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
