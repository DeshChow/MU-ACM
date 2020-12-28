import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import {BsDot} from "react-icons/bs";
import DsDetails from '../DsDetails/DsDetails';
import FootItem from '../FootItem/FootItem';
import './AlgoDetails.css'
const AlgoDetails = (props) => {
   
        const dataDS=props.dataALGO;

        const [userTopic,setUserTopic] = useContext(UserContext);

        const [currentData,setCurrentData]=useState([props.dataALGO[0]]);

        const {id}=useParams();

        const history=useHistory();

        useEffect(() => {

          //  const id=userTopic.algoID;
      
            const newCurrentData=dataDS.filter(data=> (data.id.toLowerCase()==id.toLowerCase()));
      
          //  console.log(430,id,newCurrentData);
      
            setCurrentData(newCurrentData);

            console.log(newCurrentData);
      
          },[userTopic])
    
        const handleClick=(id)=>
        {
              const newCurrentData=dataDS.filter(data=> (data.id==id));
    
              setCurrentData(newCurrentData);

              history.replace('/Detailsalgo/'+id);
        }
       
        return (
            
            <div className='row' >
    
            
    <div className="col-2" style={{backgroundColor: 'rgb(224, 224, 224)',height: '600px'}}>
        <a><h2 style={{backgroundColor: '#4CAF50', color: 'white',width: '242px',textAlign: 'center'}}>Algorithm</h2></a>
        
        <a className="sidename" onClick={()=>handleClick('binarysearch')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Binary Search</h4></a>
  
  
        <a className="sidename"  onClick={()=>handleClick('bubblesort')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Bubble Sort</h4></a>
       
       
        <a className="sidename"  onClick={()=>handleClick('bfs')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>BFS</h4></a>
       
        <a className="sidename" onClick={()=>handleClick('dfs')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>DFS</h4></a>
      
     
        <a className="sidename" onClick={()=>handleClick('segmenttree')}><h4 style={{marginLeft: '15px',cursor:'pointer'}}><BsDot/>Segment Tree</h4></a>
       
        
      </div>
          
         
          <div className="content col-10" style={{marginTop: '0px',marginLeft: '-60px'}}>
    
                  <DsDetails data={currentData}></DsDetails>
    
        
          
          </div>

          <FootItem></FootItem>
          </div>
    
    );
};

export default AlgoDetails;