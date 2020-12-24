import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Memory = () => {


    const history=useHistory();

    const handleClick=()=>
    {
       history.push('/MUMemory');
    
    }
    return (
        <div>
            <Card onClick={handleClick}>Memory</Card>
        </div>
    );
};

export default Memory;