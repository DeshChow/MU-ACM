import React from 'react';
import { Card } from 'react-bootstrap';

const SingleCard = (props) => {

    const data=props.cardData;

    console.log(data);

    return (
        <Card
            bg={'Info'.toLowerCase()}
            key={5}
            text={'Info'.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem', margin: '20px' }}
            className="mb-2"
        >
            <Card.Header><h3>{data.header}</h3></Card.Header>
            <Card.Body>

                <Card.Text>
                    {data.detail}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleCard;