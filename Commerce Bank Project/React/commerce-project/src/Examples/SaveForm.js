import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = () => {
  return (
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Type a book title" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="Type a book author" />

  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
};

export default SaveForm;