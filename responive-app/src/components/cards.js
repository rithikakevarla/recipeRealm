import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cards.css';

function BasicExample({ json, handleShowModal}) {
  const handleImageError = (e) => {
    e.target.src = 'https://media.istockphoto.com/id/1445702264/photo/magnifier-and-yellow-exclamation-point-on-aquamarine-background.jpg?s=1024x1024&w=is&k=20&c=ZiIfj328Uj3EhIHk9hEaIvQtMU_P2kXXfJAwV_Wku2A='; // Set the path to your alternate image here
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={json['image-url']} onError={handleImageError} />
      <Card.Body>
        <Card.Title>{json.title}</Card.Title>
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
