import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CalendarRow.css';

class CalendarRow extends Component {

    render() {
        return (
            <div  className="week row">
                {JSON.stringify(this.props.weekData)}
            </div>
        );

    }

}

CalendarRow.propTypes = {
    weekData: PropTypes.array.isRequired,
    weekEvents: PropTypes.array.isRequired
};

export default CalendarRow;
