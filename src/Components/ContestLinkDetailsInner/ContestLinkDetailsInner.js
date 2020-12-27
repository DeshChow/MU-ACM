import React from 'react';
import { Card } from 'react-bootstrap';
import './ContestLinkDetailsInner.css';
import {FaExternalLinkAlt} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import {RiTimeFill} from "react-icons/ri";
import {TiMediaFastForward} from "react-icons/ti";
import {MdDateRange} from "react-icons/md";

const ContestLinkDetailsInner = ({d,cnt}) => {
    return (
            
      cnt%2?
        <Card className="contestlistcard" style={{backgroundColor: 'powderblue'}}>
          <h1 style={{color: 'black'}}><b>{d.name}</b></h1>
          <br></br>
          <p><FaExternalLinkAlt style={{marginTop: '-5px', color: 'blue'}}/><b><a href={d.src}>{d.src}</a></b></p>
          <p style={{border:'3px', borderStyle:'solid', borderColor:'green', padding: '1em' ,backgroundColor: 'white', width: '300px', textAlign: 'center'}}><RiLockPasswordFill  style={{marginTop: '-5px', color: 'green'}}/><b>Password :<span style={{paddingLeft: '5px'}}></span> </b>  {d.password}</p>
           
          <p>
           <span>
           <span style={{marginLeft: '-5px'}}><RiTimeFill style={{marginTop: '-5px',color:'red'}}/>Duration : <span style={{paddingLeft: '5px'}}></span> {d.duration}</span>
           <span  style={{marginLeft: '50px'}}><TiMediaFastForward style={{marginTop: '-5px',color: 'orange'}}/>Staring Time :<span style={{paddingLeft: '5px'}}></span> {d.startTime}</span>
           </span>
           </p>
           <p><MdDateRange style={{marginTop: '-5px'}}/>Date : <span style={{paddingLeft: '5px'}}></span> {d.date}</p>
        </Card>:
        <Card className="contestlistcard" style={{backgroundColor: '#A6F9BE'}}>
        <h1 style={{color: 'black'}}><b>{d.name}</b></h1>
        <br></br>
        <p><FaExternalLinkAlt style={{marginTop: '-5px', color: 'blue'}}/><b><a href={d.src}>{d.src}</a></b></p>
        <p style={{border:'3px', borderStyle:'solid', borderColor:'#FF0000', padding: '1em', backgroundColor: 'white', width: '300px', textAlign: 'center'}}><RiLockPasswordFill  style={{marginTop: '-5px', color: 'red'}}/><b>Password : <span style={{paddingLeft: '5px'}}></span></b> {d.password}</p>
        <p>
           <span>
           <span style={{marginLeft: '-5px'}}><RiTimeFill style={{marginTop: '-5px',color:'red'}}/>Duration : <span style={{paddingLeft: '5px'}}></span> {d.duration}</span>
           <span  style={{marginLeft: '50px'}}><TiMediaFastForward style={{marginTop: '-5px',color: 'orange'}}/>Staring Time :<span style={{paddingLeft: '5px'}}></span> {d.startTime}</span>
           </span>
           </p>
           <p><MdDateRange style={{marginTop: '-5px'}}/>Date : <span style={{paddingLeft: '5px'}}></span> {d.date}</p>
      </Card>

        

        
       

      
    );
};

export default ContestLinkDetailsInner;