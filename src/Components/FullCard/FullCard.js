import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './FullCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const FullCard = (props) => {

    const {header,detail}=props.data;

    const history=useHistory();

    const handleClick=()=>{

        history.push('/details');
    }
    return (
        <Card  className="text-center CardStyle">
        <Card.Header className='bg-warning'>
    <h5 style={{color : 'blue'}}>{header}</h5></Card.Header>
        <Card.Body className='bg-info'>
         
          <Card.Text>
            {detail}
          </Card.Text>
          <Button onClick={handleClick}variant="dark">Read More</Button>
        </Card.Body>
      
      </Card>
    );
};

export default FullCard;