import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const SingleCard = (props) => {

    const data=props.cardData;

    console.log(data);

    const [userTopic,setUserTopic] = useContext(UserContext);

    const history=useHistory();

    const handleClick=(currentData)=>
    {
        history.push('/Details'+data.topic);
        const currentUserTopic={...userTopic};

        if(data.topic=='ds')
        {
          
            currentUserTopic.dsID=currentData;
        }
        else
        {
            currentUserTopic.algoID=currentData;
        }

        setUserTopic(currentUserTopic);
    }

    return (
        <Card

            onClick={() =>handleClick(data.id)}
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