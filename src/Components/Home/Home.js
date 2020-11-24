import React from 'react';

import HomeCard from '../HomeCard/HomeCard';


const Home = () => {

    const dsData= [ {

       header:'Array',
       detail:'An array is a collection of items stored at contiguous memory locations.It can store a fixed size'

    },
    {

        header:'Stack',
        detail:'Stack is a linear data structure which follows a particular order in which the operations are performed.'
 
     },
     {

        header:'Queue',
        detail:'A Queue is a linear structure which follows a particular order in which the operations are performed.'
 
     }
     
     
      
]

const algoData= [ {

    header:'BFS',
    detail:'An array is a collection of items stored at contiguous memory locations.It can store a fixed size'

 },
 {

     header:'DFS',
     detail:'Stack is a linear data structure which follows a particular order in which the operations are performed.'

  },
  {

     header:'Segment Tree',
     detail:'A Queue is a linear structure which follows a particular order in which the operations are performed.'

  }
  
  
   
]
    return (

        <>
            <h1 style={{textAlign:'center'}}>Data Structure</h1>
            <HomeCard data={dsData}></HomeCard>

            <h1 style={{textAlign:'center'}}>Algorithm</h1>

            <HomeCard data={algoData}></HomeCard>

            


        </>


    );
};

export default Home;