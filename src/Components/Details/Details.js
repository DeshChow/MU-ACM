import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import DsDetails from '../DsDetails/DsDetails';
import './Details.css'

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
        
        <div>

        <div >
        <div className="sidebar">
        <a  class="active" >DataStructure</a>
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