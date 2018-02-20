import { combineReducers } from 'redux';
import viewReducer from './settings.reducer';
import eventReducer from './events.reducer';
import monthReducer from './calendar.reducer';

const calendarReducer = combineReducers({
    settings: viewReducer,
    events: eventReducer,
    calendar: monthReducer
});

export default calendarReducer;
