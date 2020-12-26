import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {BiBrain} from "react-icons/bi";
import './Memory.css';

const Memory = () => {


    const history=useHistory();

    const handleClick=()=>
    {
       history.push('/MUMemory');
    
    }
    return (
        <div>
           <h1 style={{textAlign: 'center'}}>Memory</h1>
            <Card className="memorycard">
                 <Card onClick={handleClick} className="memorycardnext">
                     <BiBrain style={{color:'orange', marginLeft:'50px',marginBottom: '10px'}} size="10rem"/> 
                       <b style={{textAlign: 'center',color: 'red',marginBottom: '15px'}}>!!!All the Past Contest is Here!!!</b>

                       <p style={{textAlign: 'center',color: 'gray',marginBottom: '30px'}}>Grab the opportunity & take your skill to the next level</p>
                       
                       <button className="memorycardbtn">Click Here</button>
                 </Card>
             </Card>
        </div>
    );
};

export default Memory;