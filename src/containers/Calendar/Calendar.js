import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calendar.css';
import moment from "moment";

class Calendar extends Component {

    constructor() {
        super();
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
    }

    render() {
        return (

            <div className="calendar">
                <div className="header">
                    <div className="title">{this.state.now.format('MMMM YYYY')}</div>
                    <div className="navigation">
                        <div className="navigation--left">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </div>
                        <div className="navigation--right">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </div>
                    </div>
                    <div className="view"></div>
                </div>
            </div>

        );
    }

}

export default Calendar;
