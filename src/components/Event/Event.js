import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
    Button,
    Modal
} from 'react-bootstrap';

import './Event.css';

class Event extends Component {

    render() {

        return (

            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button>Cancel</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>

        );

    }

}

// Event.propTypes = {

// };

export default Event;
