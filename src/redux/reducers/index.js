import { combineReducers } from 'redux';
import viewReducer from './settings.reducer';
import eventReducer from './events.reducer';

const calendarReducer = combineReducers({
    viewReducer,
    eventReducer
});

export default calendarReducer;
