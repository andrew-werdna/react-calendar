import React, { Component } from 'react';
import moment from "moment";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import axios from 'axios';

import './Calendar.css';

import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import Weekdays from '../../components/Weekdays/Weekdays';
import CalendarRow from '../../components/CalendarRow/CalendarRow';

import * as actionCreators from "../../redux/actions/index";
import { weekdays } from '../../redux/initialState';
import * as TimeUtils from '../../utils/index';
import { getCurrentState } from '../../redux/initialState';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarDays: [],
            calendarWeeks: [],
            weekDays: weekdays
        }
        console.log(`constructor()`);
        console.log(this.props);
    }

    componentDidMount() {
        this.loadEvents();
        this.getCalendarSetup();
    }

    getCalendarSetup() {

        let currentMonthInDays,
            calendarMonthInDays,
            calendarMonthInWeeks,
            newState;

        currentMonthInDays = TimeUtils.getDaysArrayByMonth(
            this.props.calendar.now.month(),
            this.props.calendar.now.year()
        );

        calendarMonthInDays = TimeUtils.addSurroundingDays(currentMonthInDays);
        calendarMonthInWeeks = TimeUtils.calendarMonthToWeeks(calendarMonthInDays);

        newState = getCurrentState(this.state);
        newState.calendarDays = calendarMonthInDays;
        newState.calendarWeeks = calendarMonthInWeeks;
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

    render() {
        return (

            <div className="calendar">
                <CalendarHeader
                    now={this.props.calendar.now.format('MMMM YYYY')}
                    viewChoices={this.props.viewChoices}>
                </CalendarHeader>

                <br />
                {/* props.events length {this.props.events.length} <br />
                state.calendarDays length {this.state.calendarDays.length} <br />
                state.calendarWeeks length {this.state.calendarWeeks.length} */}

                <Weekdays days={this.state.weekDays}></Weekdays>

                <div className="calendar-body container">
                    {
                        this.state.calendarWeeks.map((calendarWeek, index) => {

                            let _events = this.props.events.filter((event) => {
                                return TimeUtils.isEventInWeek(event, calendarWeek);
                            });

                            return (
                                <CalendarRow
                                    key={"week" + index}
                                    weekData={calendarWeek}
                                    present={this.props.calendar.now}
                                    weekEvents={_events}>
                                </CalendarRow>
                            );

                        })
                    }
                </div>

            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        viewChoices: state.settings.view.choices,
        viewCurrent: state.settings.view.current,
        events: state.events,
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
