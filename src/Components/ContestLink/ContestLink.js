import React from 'react';
import { Card } from 'react-bootstrap';
import './ContestLink.css';
import contestbackground from '../../images/contestbackground.jpg';
import {FaLaptopCode} from "react-icons/fa";
import { useHistory } from 'react-router-dom';

const ContestLink = () => {

    const history=useHistory();

   const handleClick=()=>
   {

   history.push('/ContestLink');

   }


    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Contest Link </h1>
             
             <Card className="contestcard">
                 <Card onClick={handleClick} className="contestcardnext">
                       <FaLaptopCode style={{color:'green', marginLeft:'50px',marginBottom: '10px'}} size="10rem"/>
                       <b style={{textAlign: 'center',color: 'red',marginBottom: '15px'}}>!!!All the Past Contest is Here!!!</b>

                       <p style={{textAlign: 'center',color: 'gray',marginBottom: '30px'}}>Grab the opportunity & take your skill to the next level</p>
                       
                       <button className="contestbtn">Click Here</button>
                 </Card>
             </Card>

        </div>
    );
};

export default ContestLink;