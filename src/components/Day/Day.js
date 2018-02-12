import React, { Component } from 'react';
import './Day.css';

class Day extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div onClick={() => this.props.onDayClick()} className="day">
                <div className="day__date">
                    {this.props.date}
                </div>
                <ul>
                    {
                        this.props.events.map((event) => {
                            return (
                                <li
                                    onClick={() => this.props.onEventClick(event.id)}
                                    className="day__event">
                                        {event.title}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );

    }

}

export default Day;
