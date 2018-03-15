import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CalendarDay.css';
import * as TimeUtils from "../../utils";

class CalendarDay extends Component {

    getIsDay() {
        return this.props.currentView === "Day";
    }

    render() {
        return (
            <div
                onClick={this.props.showNewEvent}
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
                                <div
                                    key={`event_${index}_${event.id}`}
                                    className="row">
                                    <div
                                        onClick={() => this.props.showEditEvent(event.id)}
                                        className="event_item col-md-12">
                                       - {event.title}
                                    </div>
                                </div>
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
