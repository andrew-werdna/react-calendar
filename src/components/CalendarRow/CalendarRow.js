import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

import * as TimeUtils from "../../utils";
import CalendarDay from "../CalendarDay/CalendarDay";
import './CalendarRow.css';


class CalendarRow extends Component {

    render() {
        return (
            <div  className="week row">
                {

                    this.props.weekData.map((day, index) => {

                        let _events = this.props.weekEvents.filter((event) => {
                            let date = moment(event.date);
                            return TimeUtils.isSameDate(date, day.date);
                        });

                        return (
                            <CalendarDay
                                key={"day" + index}
                                date={day.date}
                                present={this.props.present}
                                events={_events}>
                            </CalendarDay>
                        );

                    })
                }
            </div>
        );

    }

}

CalendarRow.propTypes = {
    weekData: PropTypes.array.isRequired,
    weekEvents: PropTypes.array.isRequired,
    present: PropTypes.object.isRequired
};

export default CalendarRow;
