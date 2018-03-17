import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    ControlLabel,
    form,
    FormControl,
    FormGroup,
    HelpBlock,
    Modal
} from 'react-bootstrap';

import './Event.css';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
}

class Event extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            title: '',
            date: '',
            start: '',
            end: '',
            long_day: '',
            location: '',
            notes: ''
        };

        this.clearState.bind(this);
    }

    handleNewEventProps(nextProps) {
        this.setState({
            ...nextProps.event
        });
    }

    componentDidMount() {
        this.handleNewEventProps(this.props);
    }

    clearState() {
        this.setState({
            title: '',
            date: '',
            start: '',
            end: '',
            long_day: '',
            location: '',
            notes: ''
        });
    }

    componentWillUnmount() {
        this.clearState();
    }

    componentWillReceiveProps(nextProps) {
        this.handleNewEventProps(nextProps);
    }

    handleStateChange(e, key) {

        let nState = {
            ...this.state
        };

        nState[key] = e.target.value;

        this.setState(nState);

    }

    getFormSection() {

        return (
            <form>
                <FormGroup controlId="eventForm">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Title"
                        defaultValue={this.state.title}
                    />
                    <ControlLabel>Date</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Date"
                        defaultValue={this.state.date}
                    />
                    <ControlLabel>Start Time</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Start Time"
                        defaultValue={this.state.start}
                    />
                    <ControlLabel>End Time</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter End Time"
                        defaultValue={this.state.end}
                    />
                    <ControlLabel>Location</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Location"
                        defaultValue={this.state.location}
                    />
                    <ControlLabel>Notes</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        placeholder="Enter Notes"
                        defaultValue={this.state.notes}
                    />
                </FormGroup>
            </form>
        );

    }

    render() {

        return (

            <Modal
                show={this.props.show}
                onExit={() => this.clearState()}
                onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.getFormSection()}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={this.props.onHide}
                        bsStyle='default'>Cancel</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>

        );

    }

}

Event.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    event: PropTypes.object
};

export default Event;
