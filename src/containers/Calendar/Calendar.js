import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

import './Calendar.css';

import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import Weekdays from '../../components/Weekdays/Weekdays';
import CalendarRow from '../../components/CalendarRow/CalendarRow';
import Event from "../../components/Event/Event";

import * as actionCreators from "../../redux/actions/index";
import {
    getCurrentState,
    weekdays
} from '../../redux/initialState';
import * as TimeUtils from '../../utils/index';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarWeeks: [],
            today: moment(),
            weekDays: weekdays
        }

        console.log(`constructor()`);
        console.log(this.props);

    }

    componentDidMount() {
        this.loadEvents();
        this.getCalendarInMonth();
    }

    getCalendarInMonth() {

        let currentMonthInDays,
            calendarMonthInDays,
            calendarMonthInWeeks,
            newState;

        currentMonthInDays = TimeUtils.getDaysArrayByMonth(
            this.props.calendar.now.month(),
            this.props.calendar.now.year()
        );

        calendarMonthInDays = TimeUtils.addSurroundingDays(currentMonthInDays);
        calendarMonthInWeeks = TimeUtils.daysArrayToCalendarWeek(calendarMonthInDays);

        newState = getCurrentState(this.state);
        newState.calendarWeeks = calendarMonthInWeeks;
        this.setState(newState);

    }

    getCalendarInWeek() {

        let currentWeekInDays,
            calendarWeek,
            newState;

        currentWeekInDays = TimeUtils.getSingleCalendarWeekInDays(this.props.calendar.now);
        calendarWeek = TimeUtils.daysArrayToCalendarWeek(currentWeekInDays);
        newState = getCurrentState(this.state);
        newState.calendarWeeks = calendarWeek;
        this.setState(newState);

    }

    getCalendarInDay() {

        let currentDayAsWeek,
            newState;

        currentDayAsWeek = TimeUtils.getSingleCalendarDayAsWeek(this.props.calendar.now);
        newState = getCurrentState(this.state);
        newState.calendarWeeks = currentDayAsWeek;
        this.setState(newState);

    }

    loadEvents() {

        if (this.props.apiEndpoint) {

            axios.get(this.props.apiEndpoint)
                .then((response) => {
                    response.data.map((event) => {
                        this.props.actions.createEvent(event);
                        return event;
                    });
            })
            .catch((error) => {
                console.log("API ERROR:");
                console.log(error);
            });

        }

    }

    selectNextMonth() {
        let nextMonth = TimeUtils.nextMonth(this.props.calendar.now)
        this.props.actions.setPresentMoment(nextMonth);
        this.getCalendarInMonth();
    }

    selectPreviousMonth() {
        let previousMonth = TimeUtils.previousMonth(this.props.calendar.now)
        this.props.actions.setPresentMoment(previousMonth);
        this.getCalendarInMonth();
    }

    selectNextWeek() {
        let nextWeek = TimeUtils.nextWeek(this.props.calendar.now);
        this.props.actions.setPresentMoment(nextWeek);
        this.getCalendarInWeek();
    }

    selectPreviousWeek() {
        let previousWeek = TimeUtils.previousWeek(this.props.calendar.now);
        this.props.actions.setPresentMoment(previousWeek);
        this.getCalendarInWeek();
    }

    selectNextDay() {
        let nextDay = TimeUtils.nextDay(this.props.calendar.now);
        this.props.actions.setPresentMoment(nextDay);
        this.getCalendarInDay();
    }

    selectPreviousDay() {
        let previousDay = TimeUtils.previousDay(this.props.calendar.now);
        this.props.actions.setPresentMoment(previousDay);
        this.getCalendarInDay();
    }

    selectNext() {

        switch (this.props.viewCurrent) {
            case "Month":
                this.selectNextMonth();
                break;

            case "Week":
                this.selectNextWeek();
                break;

            case "Day":
                this.selectNextDay();
                break;

            default:
                break;
        }

    }

    selectPrevious() {

        switch (this.props.viewCurrent) {
            case "Month":
                this.selectPreviousMonth();
                break;

            case "Week":
                this.selectPreviousWeek();
                break;

            case "Day":
                this.selectPreviousDay();
                break;

            default:
                break;
        }

    }

    changeView(event) {

        let viewScope = event.target.value;
        this.props.actions.setView(viewScope);

        switch (viewScope) {
            case "Month":
                this.getCalendarInMonth();
                break;

            case "Week":
                this.getCalendarInWeek();
                break;

            case "Day":
                this.getCalendarInDay();
                break;

            default:
                break;
        }

    }

    onEventShow() {
        return (
            <Event></Event>
        );
    }

    handleWeekDay() {

        if (this.props.viewCurrent === "Day") {
            return (
                <Weekdays
                    today={this.state.today}
                    currentView={this.props.viewCurrent}
                    days={[this.props.calendar.now.format('dddd')]}>
                </Weekdays>
            );
        }
        else {
            return (
                <Weekdays
                    today={this.state.today}
                    currentView={this.props.viewCurrent}
                    days={this.state.weekDays}>
                </Weekdays>
            );
        }

    }

    hideForm() {
        this.props.actions.setIsCreatingEvent(false);
        this.props.actions.setIsEditingEvent(false);
        this.props.actions.clearEvent();
    }

    showNewEvent(date) {
        this.props.actions.initEvent(date);
        this.props.actions.setIsCreatingEvent(true);
    }

    showEditEvent(id) {
        this.props.actions.editEvent(id);
        this.props.actions.setIsEditingEvent(true);
    }

    render() {
        return (

            <div className="calendar">
                <CalendarHeader
                    now={this.props.calendar.now.format('MMMM YYYY')}
                    viewChoices={this.props.viewChoices}
                    onNext={this.selectNext.bind(this)}
                    onPrevious={this.selectPrevious.bind(this)}
                    onChangeView={this.changeView.bind(this)}>
                </CalendarHeader>

                {this.handleWeekDay()}

                <div className={"container" + (this.props.viewCurrent === 'Day' ? '' : ' calendar-body')}>
                    {
                        this.state.calendarWeeks.map((calendarWeek, index) => {

                            let _events = this.props.events.filter((event) => {
                                return TimeUtils.isEventInWeek(event, calendarWeek);
                            });

                            return (
                                <CalendarRow
                                    showNewEvent={this.showNewEvent.bind(this)}
                                    showEditEvent={this.showEditEvent.bind(this)}
                                    currentView={this.props.viewCurrent}
                                    key={"week" + index}
                                    weekData={calendarWeek}
                                    present={this.state.today}
                                    weekEvents={_events}>
                                </CalendarRow>
                            );

                        })
                    }
                </div>

                <Event
                    event={this.props.currentEvent}
                    show={this.props.calendar.creatingEvent}
                    onHide={this.hideForm.bind(this)}
                    title="Create Event">
                </Event>

                <Event
                    event={this.props.currentEvent}
                    show={this.props.calendar.editingEvent}
                    onHide={this.hideForm.bind(this)}
                    title="Edit Event">
                </Event>

            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        viewChoices: state.settings.view.choices,
        viewCurrent: state.settings.view.current,
        events: state.events.collection,
        currentEvent: state.events.current,
        apiEndpoint: state.settings.api.events,
        calendar: state.calendar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
