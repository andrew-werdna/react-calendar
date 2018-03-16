import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    ControlLabel,
    form,
    FormControl,
    FormGroup,
    Modal
} from 'react-bootstrap';

import './Event.css';

class Event extends Component {

    render() {

        if (this.props.event && Object.getOwnPropertyNames(this.props.event).length > 0) {
            console.log(`this.props.event`);
            console.dir(this.props.event);
        }

        return (

            <Modal
                show={this.props.show}
                onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form>
                        <FormGroup controlId="eventForm">

                        </FormGroup>
                    </form>

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
