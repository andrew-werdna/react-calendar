import React, { Component } from 'react';
import './Calendar.css';
import moment from "moment";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from "../../redux/actions/index";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import axios from 'axios';
import { weekdays } from '../../redux/initialState';
import Weekdays from '../../components/Weekdays/Weekdays';
import * as TimeUtils from '../../utils/index';
import { getCurrentState } from '../../redux/initialState';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            now: moment(),
            active: moment(),
            weekDays: weekdays,
            calendarDays: [],
            calendarWeeks: []
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
            this.state.now.month(),
            this.state.now.year()
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
                    now={this.state.now.format('MMMM YYYY')}
                    viewChoices={this.props.viewChoices}>
                </CalendarHeader>
                events length {this.props.events.length} <br />
                daysArray length {this.state.calendarDays.length} <br />
                calendarWeeks length {this.state.calendarWeeks.length}

                <Weekdays days={this.state.weekDays}></Weekdays>

            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        viewChoices: state.settings.view.choices,
        viewCurrent: state.settings.view.current,
        events: state.events,
        apiEndpoint: state.settings.api.events
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
