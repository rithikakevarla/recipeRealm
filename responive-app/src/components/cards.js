import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cards.css';

function BasicExample({ json, handleShowModal }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="cute-title">{json.title}</Card.Title>
        <Card.Text>
          {json.description}
        </Card.Text>
        
        <Button variant="primary" onClick={() => handleShowModal(json)}>
          Cook
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
