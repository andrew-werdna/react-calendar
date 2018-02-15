import { combineReducers } from 'redux';
import viewReducer from './settings.reducer';
import eventReducer from './events.reducer';

const calendarReducer = combineReducers({
    settings: viewReducer,
    events: eventReducer
});

export default calendarReducer;
