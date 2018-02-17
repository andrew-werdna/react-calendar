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

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            now: moment(),
            days: weekdays
        }
        console.log(`constructor()`);
        console.log(this.props);
    }

    componentDidMount() {
        this.loadEvents();
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
                events length {this.props.events.length}

                <Weekdays days={this.state.days}></Weekdays>

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
