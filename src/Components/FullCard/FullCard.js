import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import './FullCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const FullCard = (props) => {
  
      
    const {header,detail,topic,id}=props.data;

    const [userTopic,setUserTopic] = useContext(UserContext);

    console.log('fullcard ID : ',id,header,detail,topic);


    

    const history=useHistory();

    const handleClick=(currentData)=>{

     

     const currentUserTopic={...userTopic};

        if(topic=='ds')
        {
          
            currentUserTopic.dsID=currentData;

            history.push('/Details/'+id);
        }
        else
        {
            currentUserTopic.algoID=currentData;

            history.push('Detailsalgo/'+id);
        }

        setUserTopic(currentUserTopic);
    }
    return (
        <Card  className="text-center CardStyle">
        <Card.Header className='bg-warning'>
    <h5 style={{color : 'blue'}}>{header}</h5></Card.Header>
        <Card.Body className='bg-info'>
         
          <Card.Text>
            {detail}
          </Card.Text>
          <Button onClick={()=>handleClick(id)}variant="dark">Read More</Button>
        </Card.Body>
      
      </Card>
    );
};

export default FullCard;