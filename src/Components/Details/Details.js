import React, { useState } from 'react';
import DsDetails from '../DsDetails/DsDetails';
import './Details.css'

const Details = (props) => {

   
    const dataDS=props.dataDS;

    const [currentData,setCurrentData]=useState([props.dataDS[0]]);

    const handleClick=(id)=>
    {
          const newCurrentData=dataDS.filter(data=> (data.id==id));

          setCurrentData(newCurrentData);
    }
    return (
        
        <div>

        <div >
        <div className="sidebar">
        <a  class="active" >Data Strcuture</a>
        <a onClick={()=>handleClick('array')}>Array</a>
        <a onClick={()=>handleClick('stack')}>Stack</a>
        <a onClick={()=>handleClick('queue')}>Queue</a>
        <a onClick={()=>handleClick('linkedlist')}>Linked List</a>
        <a onClick={()=>handleClick('graph')}>Graph</a>
       
        
      </div>
      </div>
      
     
      <div className="content">

              <DsDetails data={currentData}></DsDetails>

    
      
      </div>
      </div>

     
    );
};

export default Details;