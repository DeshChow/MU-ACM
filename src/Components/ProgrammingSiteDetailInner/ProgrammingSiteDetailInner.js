import React from 'react';
import { Card } from 'react-bootstrap';
import './ProgrammingSiteDetailInner.css';


const ProgrammingSiteDetailInner = ({d}) => {

    console.log(d.src)


    return (
        <a href={d.src}>
           <Card  style={{height: '450px', marginTop: '30px',  border: '2px solid gray', borderRadius: '5px', marginBottom: '10px'}}  classname="pendingcardrev">

            <img  src={d.name} style={{width: '100%', height: '100%'}}></img>

           

            </Card>
        </a>
    );
};

export default ProgrammingSiteDetailInner;