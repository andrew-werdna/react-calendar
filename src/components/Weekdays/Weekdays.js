import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Weekdays.css'

class Weekdays extends Component {

    render() {

        return (


            <div className="weekdays container">
                <div className="row">
                    {
                        this.props.days.map((day, index) =>{
                            return (
                                <div key={index} className="weekday col-md-1 columns-7">{day}</div>
                            );
                        })
                    }
                </div>
            </div>

        );

    }

}

Weekdays.propTypes = {
    days: PropTypes.array.isRequired,
};

export default Weekdays;
