import React, { Component } from 'react';
import {
    Button,
    FormControl,
    Glyphicon
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CalendarHeader.css';

class CalendarHeader extends Component {

    render() {
        return (
            <div className="container">
                <div className="header row">
                    <div className="title col-md-2 col-md-offset-1">{this.props.now}</div>
                    <div className="navigation-container col-md-2 col-md-offset-1">
                        <div className="navigation row">
                            <div className="navigation--left col-md-3 col-md-offset-1">
                                <Button
                                    onClick={this.props.onPreviousMonth}
                                    bsSize="small">
                                    <Glyphicon glyph="menu-left" />
                                </Button>
                            </div>
                            <div className="navigation--right col-md-3">
                                <Button
                                    onClick={this.props.onNextMonth}
                                    bsSize="small">
                                    <Glyphicon glyph="menu-right" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="view col-md-2 col-md-offset-1">
                        <FormControl componentClass="select" placeholder="view">
                            {
                                this.props.viewChoices.map((choice) => {
                                    return (
                                        <option key={choice} value={choice}>{choice}</option>
                                    );
                                })
                            }
                        </FormControl>
                    </div>
                </div>
            </div>
        );
    }

}

CalendarHeader.propTypes = {
    now: PropTypes.string.isRequired,
    viewChoices: PropTypes.array.isRequired,
    onNextMonth: PropTypes.func.isRequired,
    onPreviousMonth: PropTypes.func.isRequired
};

export default CalendarHeader;
