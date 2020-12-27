import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {FaGraduationCap} from "react-icons/fa";
import {AiOutlineLine} from "react-icons/ai";
import './Memory.css';

const Memory = () => {


    const history=useHistory();

    const handleClick=()=>
    {
       history.push('/MUMemory');
    
    }
    return (
        <div>
           <h1 style={{textAlign: 'center', fontFamily: "cursive"}} className="preee">Memory</h1>
           <div className="row" >  
           <AiOutlineLine size="2rem" style={{marginLeft: "715px",color: '#4A0363'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'tomato'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'green'}}></AiOutlineLine>
           </div>
            <Card className="memorycard">
                 <Card onClick={handleClick} className="memorycardnext"> 
                      <FaGraduationCap style={{color:'red', marginLeft:'50px',marginBottom: '10px'}} size="10rem"/>
                       <h1 style={{textAlign: 'center',color: 'white',marginBottom: '15px',fontStyle:"italic"}}>Memory of ACM Life</h1>

                       <p style={{textAlign: 'center',color: 'gray',marginBottom: '30px'}}>Metropolitan University has a mesmerizing memory behind their ACM journey</p>
                       
                       <button className="memorycardbtn">Click Here</button>
                 </Card>
             </Card>
        </div>
    );
};

export default Memory;