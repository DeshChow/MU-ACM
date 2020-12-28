import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import {BsDot} from "react-icons/bs";
import DsDetails from '../DsDetails/DsDetails';
import FootItem from '../FootItem/FootItem';
import './Details.css';

const Details = (props) => {

   
    const dataDS=props.dataDS;

    const [userTopic,setUserTopic] = useContext(UserContext);

    console.log(userTopic);

    const [currentData,setCurrentData]=useState([props.dataDS[0]]);

    const {id}=useParams();

    console.log(id);

    useEffect(() => {

      

      const newCurrentData=dataDS.filter(data=> (data.id.toLowerCase()==id.toLowerCase()));

      console.log(430,id,newCurrentData);

      setCurrentData(newCurrentData);

    },[userTopic])


      const history=useHistory();

    const handleClick=(id)=>
    {
          const newCurrentData=dataDS.filter(data=> (data.id==id));

          history.replace('/Details/'+id);

          setCurrentData(newCurrentData);
    }
    return (
        
        <div className="row">

        
        <div className="col-2" style={{backgroundColor: 'rgb(224, 224, 224)',height: '600px'}}>
        <a><h2 style={{backgroundColor: '#4CAF50', color: 'white',width: '242px',textAlign: 'center'}}>Data Structure</h2></a>
        <a className="sidename" onClick={()=>handleClick('array')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Array</h4></a>
  
  
        <a className="sidename"  onClick={()=>handleClick('stack')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Stack</h4></a>
       
       
        <a className="sidename"  onClick={()=>handleClick('queue')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Queue</h4></a>
       
        <a className="sidename" onClick={()=>handleClick('linkedlist')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Linked List</h4></a>
      
     
        <a className="sidename" onClick={()=>handleClick('graph')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Graph</h4></a>
       
        
      </div>
    
      
     
      <div className="content col-10" style={{marginTop: '0px',marginLeft: '-60px'}}>

              <DsDetails data={currentData}></DsDetails>

    
      
      </div>


      <FootItem></FootItem>




      </div>

     
    );
};

export default Details;