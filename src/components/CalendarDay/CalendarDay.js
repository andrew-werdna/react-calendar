import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CalendarDay.css';
import * as TimeUtils from "../../utils";

class CalendarDay extends Component {

    render() {
        return (
            <div className="single_day col-md-1 columns-7">
                <div className="row">
                    <div className="col-md-4">
                        <div
                            className={TimeUtils.isSameDate(this.props.date, this.props.present) ? "today" : "not_today"}>
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
                                    <div className="event_item col-md-12">
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
    events: PropTypes.array.isRequired
}

export default CalendarDay;
