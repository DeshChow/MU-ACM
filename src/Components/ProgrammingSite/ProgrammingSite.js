import React from 'react';
import { Card } from 'react-bootstrap';
import './ProgrammingSite.css';
import '../../images/programmingsite.png';
import {BiBrain} from "react-icons/bi";
import { useHistory } from 'react-router-dom';

const ProgrammingSite = () => {

    const history=useHistory();

    const handleClick=()=>
    {
            history.push('/ProgrammingSite')
    }
    return (
        <div>

            <h1 style={{textAlign: 'center'}}>Programming Site</h1>
            <Card className="programmingsitecard">
                 <Card onClick={handleClick} className="programmingsitecardnext">
                     <BiBrain style={{color:'orange', marginLeft:'50px',marginBottom: '10px'}} size="10rem"/> 
                       <b style={{textAlign: 'center',color: 'red',marginBottom: '15px'}}>!!!All the Past Contest is Here!!!</b>

                       <p style={{textAlign: 'center',color: 'gray',marginBottom: '30px'}}>Grab the opportunity & take your skill to the next level</p>
                       
                       <button className="programmingsitebtn">Click Here</button>
                 </Card>
             </Card>

        </div>
    );
};

export default ProgrammingSite;