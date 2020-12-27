import React from 'react';
import { Card } from 'react-bootstrap';
import './ContestLink.css';
import contestbackground from '../../images/contestbackground.jpg';
import {FaLaptopCode} from "react-icons/fa";
import {AiOutlineLine} from "react-icons/ai";
import { useHistory } from 'react-router-dom';

const ContestLink = () => {

    const history=useHistory();

   const handleClick=()=>
   {

   history.push('/ContestLink');

   }


    return (
        <div>
            <h1 style={{textAlign: 'center',fontFamily: 'cursive'}}>Contest</h1>
            <div className="row" >  
           <AiOutlineLine size="2rem" style={{marginLeft: "715px",color: '#4A0363'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'tomato'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'green'}}></AiOutlineLine>
           </div>
             <Card className="contestcard">
                 <Card onClick={handleClick} className="contestcardnext">
                       <FaLaptopCode style={{color:'#0AF811', marginLeft:'50px',marginBottom: '10px'}} size="10rem"/>
                       <h1 style={{textAlign: 'center',color: 'white',marginBottom: '15px',fontStyle:"italic"}}>Go for The Battle</h1>

                       <p style={{textAlign: 'center',color: 'gray',marginBottom: '30px'}}>Grab the opportunity & take your skill to the next level</p>
                       
                       <button className="contestbtn">Click Here</button>
                 </Card>
             </Card>

        </div>
    );
};

export default ContestLink;