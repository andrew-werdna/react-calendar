import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CalendarEventItem.css';

class CalendarEventItem extends Component {

    render() {

        return (
            <div className="row">
                <div
                    onClick={
                        (e) => {
                            this.props.showEditEvent(this.props.event.id)
                            e.stopPropagation();
                        }
                    }
                    className="event_item col-md-12">
                    - {this.props.event.title}
                </div>
            </div>
        );

    }

}

CalendarEventItem.propTypes = {
    event: PropTypes.object.isRequired,
    showEditEvent: PropTypes.func.isRequired
}

export default CalendarEventItem;

