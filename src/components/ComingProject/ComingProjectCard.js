import React from 'react';
import { Card } from 'react-bootstrap';

const ComingProjectCard = ({project}) => {
    return (
        <div className = 'col-md-4'>
            <Card className = "mt-5 col-md-4 ms-3" style={{ width: '18rem',padding:"20px",textAlign: 'center',boxShadow:"10px 10px 40px"}}>
                <Card.Img style = {{width: '150px',height:"150px",marginLeft:'15%',borderRadius:"50%"}} variant="top" src={project.img} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                        {project.description}
                     </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ComingProjectCard;