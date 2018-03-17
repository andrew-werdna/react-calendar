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

    handleStateChange(e, key) {

        let nState = {
            ...this.props
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
                        defaultValue={this.props.event.title}
                    />
                    <ControlLabel>Date</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Date"
                        defaultValue={this.props.event.date}
                    />
                    <ControlLabel>Start Time</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Start Time"
                        defaultValue={this.props.event.start}
                    />
                    <ControlLabel>End Time</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter End Time"
                        defaultValue={this.props.event.end}
                    />
                    <ControlLabel>Location</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Location"
                        defaultValue={this.props.event.location}
                    />
                    <ControlLabel>Notes</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        placeholder="Enter Notes"
                        defaultValue={this.props.event.notes}
                    />
                </FormGroup>
            </form>
        );

    }

    render() {

        return (

            <Modal
                show={this.props.show}
                onExit={this.props.onHide}
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
