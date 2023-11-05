import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Note = ({ note }) => (
  <Card className="h-100">
    <ListGroup.Item>
      <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
      <p>{note.note}</p>
    </ListGroup.Item>
  </Card>
);

// Require a document to be passed to this component.
Note.propTypes = {
  note: PropTypes.shape({
    note: PropTypes.string,
    contactId: PropTypes.string,
    owner: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  }).isRequired,
};

export default Note;
