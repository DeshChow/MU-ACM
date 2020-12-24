import React, { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import SingleCard from '../SingleCard/SingleCard';
import './HomeCard.css';

const HomeCard = (props) => {

    let data = props.data;




    return (

        <div>
            <CardGroup>

                {
                    data.map(cardData => <SingleCard cardData={cardData} key={cardData.header} ></SingleCard>)
                }

            </CardGroup>
        </div>

    );
};

export default HomeCard;