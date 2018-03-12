import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Modal
} from 'react-bootstrap';

import './Event.css';

class Event extends Component {

    render() {

        return (

            <Modal
                show={this.props.show}
                onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Testing.....
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
    title: PropTypes.string.isRequired
};

export default Event;
