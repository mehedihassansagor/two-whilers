import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ServiceCard = ({ event }) => {
    console.log(event);
    return (
        <Card className = "mt-5 col-md-4 ms-3" style={{ width: '18rem',padding:"20px",textAlign: 'center',boxShadow:"10px 10px 40px"}}>
            <Card.Img style = {{width: '150px',height:"150px",marginLeft:'20%',borderRadius:"50%"}} variant="top" src={event.imageURL} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text> {event.description}  </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;