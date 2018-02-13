import React, { Component } from 'react';
import './Calendar.css';
import moment from "moment";
import {
    Button,
    FormControl,
    Glyphicon
} from 'react-bootstrap';

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

            <div className="calendar container">
                <div className="header row">
                    <div className="title col-md-2 col-md-offset-1">{this.state.now.format('MMMM YYYY')}</div>
                    <div className="navigation-container col-md-2 col-md-offset-1">
                        <div className="navigation row">
                            <div className="navigation--left col-md-3 col-md-offset-1">
                                <Button bsSize="small">
                                    <Glyphicon glyph="menu-left" />
                                </Button>
                            </div>
                            <div className="navigation--right col-md-3">
                                <Button bsSize="small">
                                    <Glyphicon glyph="menu-right" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="view col-md-2 col-md-offset-1">
                        <FormControl componentClass="select" placeholder="view">
                            <option value="Month">Month</option>
                            <option value="Day">Day</option>
                        </FormControl>
                    </div>
                </div>
            </div>

        );
    }

}

export default Calendar;
