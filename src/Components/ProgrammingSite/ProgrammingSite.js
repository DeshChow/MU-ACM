import React from 'react';
import { Card } from 'react-bootstrap';
import './ProgrammingSite.css';
import '../../images/programmingsite.png';
import {SiCodeforces} from "react-icons/si";
import {AiOutlineLine} from "react-icons/ai";
import { useHistory } from 'react-router-dom';

const ProgrammingSite = () => {

    const history=useHistory();

    const handleClick=()=>
    {
            history.push('/ProgrammingSite')
    }
    return (
        <div>

            <h1 style={{textAlign: 'center', fontFamily: "cursive"}}>Online Judges</h1>
            <div className="row" >  
           <AiOutlineLine size="2rem" style={{marginLeft: "715px",color: '#4A0363'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'tomato'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'green'}}>
               </AiOutlineLine>
            </div>
            <Card className="programmingsitecard">
                 <Card onClick={handleClick} className="programmingsitecardnext">
                     <SiCodeforces style={{color:'yellow', marginLeft:'50px',marginBottom: '10px'}} size="10rem"/> 
                     <h1 style={{textAlign: 'center',color: 'white',marginBottom: '15px',fontStyle:"italic"}}>Achieve Your CP Crown</h1>

                       <p style={{textAlign: 'center',color: 'gray',marginBottom: '30px'}}>Enhance your cp knowledge and go to next level with contest</p>
                       
                       <button className="programmingsitebtn">Click Here</button>
                 </Card>
             </Card>

        </div>
    );
};

export default ProgrammingSite;