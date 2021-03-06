import moment from "moment";
import cloneDeep from "lodash/cloneDeep";

export const initialState = {
    events: {
        collection: [],
        current: {}
    },
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
        now: moment(),
        creatingEvent: false,
        editingEvent: false
    }
};

export const getCurrentState = (state = initialState) => {
    return cloneDeep(state);
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
