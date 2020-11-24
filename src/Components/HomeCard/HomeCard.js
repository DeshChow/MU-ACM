import React, { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './HomeCard.css';

const HomeCard = (props) => {

    let data=props.data;


   

    return (
        <CardGroup>
             <Card 
                bg={'Info'.toLowerCase()}
                key={5}
                text={'Info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem', margin: '20px' }}
                className="mb-2"
            >
                <Card.Header><h3>{data[0].header}</h3></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                        {data[0].detail}
                        </Card.Text>
                </Card.Body>
            </Card>

            <Card
                bg={'Info'.toLowerCase()}
                key={5}
                text={'Info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem', margin: '20px' }}
                className="mb-2"
            >
                <Card.Header><h3>{data[1].header}</h3></Card.Header>
                <Card.Body>
                  
                    <Card.Text>
                    {data[1].detail}
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card
                bg={'Info'.toLowerCase()}
                key={5}
                text={'Info'.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem', margin: '20px' }}
                className="mb-2"
            >
                <Card.Header><h3>{data[2].header}</h3></Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                    {data[2].detail}
                        </Card.Text>
                </Card.Body>
            </Card>


            </CardGroup>
       
    );
};

export default HomeCard;