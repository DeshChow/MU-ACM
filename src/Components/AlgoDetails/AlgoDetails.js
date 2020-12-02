import React, { useState } from 'react';
import DsDetails from '../DsDetails/DsDetails';
import './AlgoDetails.css'
const AlgoDetails = (props) => {
   
        const dataDS=props.dataALGO;

        const [currentData,setCurrentData]=useState([props.dataALGO[0]]);
    
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
            <a onClick={()=>handleClick('binarysearch')}>Binary Search</a>
            <a onClick={()=>handleClick('bubblesort')}>Bubble Sort</a>
            <a onClick={()=>handleClick('bfs')}>BFS</a>
            <a onClick={()=>handleClick('dfs')}>DFS</a>
            <a onClick={()=>handleClick('segmenttree')}>Segment Tree</a>
           
            
          </div>
          </div>
          
         
          <div className="content">
    
                  <DsDetails data={currentData}></DsDetails>
    
        
          
          </div>
          </div>
    
    );
};

export default AlgoDetails;