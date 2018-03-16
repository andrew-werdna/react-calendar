import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CalendarDay.css';
import * as TimeUtils from "../../utils";
import CalendarEventItem from "../CalendarEventItem/CalendarEventItem";

class CalendarDay extends Component {

    getIsDay() {
        return this.props.currentView === "Day";
    }

    render() {
        return (
            <div
                onClick={
                    (e) => {
                        this.props.showNewEvent(this.props.date)
                        e.stopPropagation();
                    }
                }
                className={"single_day col-md-1 columns-7 " + (this.getIsDay() ? 'large-day' : 'normal')}>
                <div className="row">
                    <div className="col-md-4">
                        <div
                            className={
                                (TimeUtils.isSameDate(this.props.date, this.props.present) ? "today" : "not_today") +
                                (this.getIsDay() ? ' small-date' : '')
                            }>
                            {this.props.date.format("DD")}
                        </div>
                    </div>
                </div>
                    {
                        this.props.events.map((event, index) => {
                            return (
                                <CalendarEventItem
                                    key={`event_${index}_${event.id}`}
                                    event={event}
                                    showEditEvent={this.props.showEditEvent}>
                                </CalendarEventItem>
                            );
                        })
                    }
            </div>
        );
    }

}

CalendarDay.propTypes = {
    date: PropTypes.object.isRequired,
    present: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    currentView: PropTypes.string.isRequired,
    showNewEvent: PropTypes.func.isRequired,
    showEditEvent: PropTypes.func.isRequired
}

export default CalendarDay;
