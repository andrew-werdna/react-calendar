import React, { Component } from 'react';
import './Calendar.css';
import moment from "moment";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from "../../redux/actions/index";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            now: moment(),
            days: {
                full: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                short: [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ]
            }
        }
        console.log(`constructor()`);
        console.log(`props = ${JSON.stringify(props)}`);
        // console.log(`state = ${JSON.stringify(this.state)}`);
    }

    render() {
        return (

            <div className="calendar">
                <CalendarHeader
                    now={this.state.now.format('MMMM YYYY')}
                    viewChoices={this.props.viewChoices}>
                </CalendarHeader>
            </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        viewChoices: state.settings.view.choices,
        viewCurrent: state.settings.view.current,
        events: state.events
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
