import React from 'react';
import { Card } from 'react-bootstrap';
import './MemoryDetailInner.css';
import {GiTrophy} from "react-icons/gi";

const MemoryDetailInner = (props) => {
    

    const {imgName,name,rank,details}=props.d;
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
             <Card className="memorycarddetail">
                 <br></br>
                 <br></br>
                 <br></br>
                 <h1 style={{marginLeft: '450px', color: 'white', textAlign: 'center',fontStyle: 'italic'}}>{name}</h1>
                 <br></br>
                 <br></br>
                 <h2 style={{marginLeft: '450px', color: 'white', textAlign: 'center'}}><GiTrophy style={{marginTop: '-5px',color: 'green'}}/><span style={{color: 'orange',paddingRight: '10px'}}>Rank:</span><span style={{fontStyle: 'italic'}}>{rank}</span></h2>
                 <br></br>
                 <p style={{marginLeft: '450px', color: 'gray', textAlign: 'justify',padding: '20px'}}>{details}</p>
                 <Card className="memorycardnextdetail"> 
                      <img src={imgName}></img>
                 </Card>
             </Card>
           
            
        </div>
    );
};

export default MemoryDetailInner;