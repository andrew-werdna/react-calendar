import React, { Component } from 'react';
import './Calendar.css';
import moment from "moment";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from "../../redux/actions/index";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import axios from 'axios';

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
        console.log(this.props);
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {

        if (this.props.apiEndpoint) {

            axios.get(this.props.apiEndpoint)
                .then((response) => {
                    response.data.map((event) => {
                        this.props.actions.createEvent(event);
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
                events length {this.props.events.length}
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
